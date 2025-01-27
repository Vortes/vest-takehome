import useWebsocket from "@/app/hooks/useWebsocket"
import { EmojiPlugin } from "@/app/utils/emoji-plugin"
import {
	TradingData,
	transformIntervalChartData,
} from "@/app/utils/transform-chart"
import { useDroppable } from "@dnd-kit/core"
import {
	ColorType,
	createChart,
	IChartApi,
	ISeriesApi,
	Time,
	UTCTimestamp,
} from "lightweight-charts"
import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react"
import SkeletonLoadingChart from "../SkeletonLoadingChart"
import { OHLCData } from "."
import { useMutation, useQuery } from "@tanstack/react-query"
import { MarketType, TimeInterval } from "@/app/utils/enums"
import { timeStamp } from "console"

interface ChartProps {
	hoveredData: OHLCData | undefined
	setHoveredData: Dispatch<SetStateAction<OHLCData | undefined>>
	emojiTimestamp: number | null
	emojiTopPosition: number | null
	selectedEmoji: string | null
	selectedMarket: MarketType
	setSelectedMarket: Dispatch<SetStateAction<MarketType>>
	timeInterval: TimeInterval
}

const Chart: FC<ChartProps> = ({
	hoveredData,
	setHoveredData,
	emojiTimestamp,
	emojiTopPosition,
	selectedEmoji,
	selectedMarket,
	setSelectedMarket,
	timeInterval,
}) => {
	const chartContainerRef = useRef<HTMLDivElement>(null)
	const chartRef = useRef<IChartApi | null>(null)
	const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null)
	const [isReady, liveTradingData] = useWebsocket(timeInterval, selectedMarket)

	const {
		isPending,
		isError,
		data: tradingData,
	} = useQuery({
		queryKey: ["tradingData", selectedMarket, timeInterval],
		queryFn: ({ queryKey }) =>
			fetchIntervalTradingData(queryKey[1] as MarketType),
	})

	const newEmojiPostMutation = useMutation({
		mutationFn: async ({
			timestamp,
			emoji,
			position,
		}: {
			timestamp: Time
			emoji: string
			position: number
		}) => {
			const res = await fetch("http://localhost:3001/addReaction", {
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					timestamp: timestamp,
					emoji: emoji,
					position: position,
					userId: "user1",
				}),
			})
			if (!res.ok) throw new Error("Failed to add reaction")
			return res.json()
		},
	})

	const { setNodeRef } = useDroppable({
		id: "trading-chart",
	})

	async function fetchIntervalTradingData(
		market: MarketType
	): Promise<TradingData[]> {
		setSelectedMarket(market)
		const res = await fetch(
			`https://server-mmdev.vest.exchange/v2/klines?symbol=${market}&interval=${timeInterval}&limit=200`
		)
		const rawData = await res.json()
		const formattedData = transformIntervalChartData(rawData)
		return formattedData
	}

	useEffect(() => {
		if (!chartContainerRef.current || !tradingData) {
			return
		}
		chartRef.current = createChart(chartContainerRef.current, {
			layout: {
				background: { type: ColorType.Solid, color: "#161514" },
				textColor: "#d1d4dc",
			},
			grid: {
				vertLines: { color: "#424242" },
				horzLines: { color: "#424242" },
			},
			rightPriceScale: {
				borderColor: "#2c2c2c",
			},
			timeScale: {
				borderColor: "#2c2c2c",
			},
		})

		seriesRef.current = chartRef.current.addCandlestickSeries({
			upColor: "#26a69a",
			downColor: "#ef5350",
			borderVisible: false,
			wickUpColor: "#26a69a",
			wickDownColor: "#ef5350",
		})
		seriesRef.current.setData(tradingData)

		const handleResize = () => {
			if (chartRef.current && chartContainerRef.current) {
				chartRef.current.applyOptions({
					width: chartContainerRef.current.clientWidth,
					height: chartContainerRef.current.clientHeight,
				})
			}
		}

		window.addEventListener("resize", handleResize)

		setTimeout(handleResize, 1)

		const handler = chartRef.current.subscribeCrosshairMove((param) => {
			const candleData = param.seriesData.get(seriesRef.current) as OHLCData
			setHoveredData(candleData)
		})

		return () => {
			window.removeEventListener("resize", handleResize)
			chartRef.current?.remove()
			chartRef.current?.unsubscribeCrosshairMove(handler)
			chartRef.current = null
			seriesRef.current = null
		}
	}, [tradingData, setHoveredData])

	useEffect(() => {
		if (
			!chartContainerRef.current ||
			!seriesRef.current ||
			!chartRef.current ||
			!emojiTopPosition ||
			!selectedEmoji
		)
			return
		const emojiPrimitive = new EmojiPlugin(
			chartRef.current,
			seriesRef.current,
			selectedEmoji,
			emojiTimestamp as UTCTimestamp,
			emojiTopPosition
		)
		seriesRef.current.attachPrimitive(emojiPrimitive)

		console.log(emojiPrimitive._timestamp)

		newEmojiPostMutation.mutate({
			timestamp: emojiTimestamp as UTCTimestamp,
			emoji: selectedEmoji,
			position: emojiTopPosition,
		})
	}, [emojiTimestamp, emojiTopPosition, selectedEmoji])

	// TODO: use prev trading data while the new one is loading in
	// useEffect(() => {
	// 	if (liveTradingData && seriesRef.current) {
	// 		setHoveredData(liveTradingData)
	// 		seriesRef.current.update(liveTradingData)
	// 	}
	// }, [liveTradingData, setHoveredData])

	if (isError) return

	return (
		<>
			<div
				className="h-[600px] w-full"
				ref={setNodeRef}
			>
				{isPending && <SkeletonLoadingChart />}

				<div
					ref={chartContainerRef}
					className={`z-0 relative h-full ${isPending ? "hidden" : ""}`}
					onDragOver={(e) => e.preventDefault()}
				>
					{/* TODO: make accurate to figma (include title & volume) */}
					<div
						className={`absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none`}
					>
						<div className="flex gap-4 text-[#26a69a]">
							<p>
								<span className="text-white">O</span>{" "}
								{hoveredData?.open.toFixed(2)}
							</p>
							<p>
								<span className="text-white">H</span>{" "}
								{hoveredData?.high.toFixed(2)}
							</p>
							<p>
								<span className="text-white">L</span>{" "}
								{hoveredData?.low.toFixed(2)}
							</p>
							<p>
								<span className="text-white">C</span>{" "}
								{hoveredData?.close.toFixed(2)}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Chart
