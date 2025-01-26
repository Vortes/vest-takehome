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
	UTCTimestamp,
} from "lightweight-charts"
import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react"
import SkeletonLoadingChart from "../SkeletonLoadingChart"
import { OHLCData } from "."

interface ChartProps {
	hoveredData: OHLCData | undefined
	setHoveredData: Dispatch<SetStateAction<OHLCData | undefined>>
	emojiTimestamp: number | null
	emojiTopPosition: number | null
}

const Chart: FC<ChartProps> = ({
	hoveredData,
	setHoveredData,
	emojiTimestamp,
	emojiTopPosition,
}) => {
	const chartContainerRef = useRef<HTMLDivElement>(null)
	const chartRef = useRef<IChartApi | null>(null)
	const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null)

	const [intervalTradingData, setIntervalTradingData] = useState<
		TradingData[] | null
	>()
	const [isLoading, setIsLoading] = useState(true)

	const [isReady, liveTradingData] = useWebsocket()

	const { setNodeRef } = useDroppable({
		id: "trading-chart",
	})

	useEffect(() => {
		async function fetchIntervalTradingData() {
			const res = await fetch(
				"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=300"
			)
			const rawData = await res.json()
			const formattedData = transformIntervalChartData(rawData)
			setIntervalTradingData(formattedData)
		}

		fetchIntervalTradingData()
	}, [])

	useEffect(() => {
		if (!intervalTradingData || !chartContainerRef.current) {
			setIsLoading(true)
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

		seriesRef.current.setData(intervalTradingData)

		const handleResize = () => {
			if (chartRef.current && chartContainerRef.current) {
				chartRef.current.applyOptions({
					width: chartContainerRef.current.clientWidth,
					height: chartContainerRef.current.clientHeight,
				})
			}
		}

		window.addEventListener("resize", handleResize)
		setIsLoading(false)

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
	}, [intervalTradingData, setHoveredData])

	//TODO: find out a more efficient way to do this lol
	useEffect(() => {
		if (
			!chartContainerRef.current ||
			!seriesRef.current ||
			!chartRef.current ||
			!emojiTopPosition
		)
			return
		const emojiPrimitive = new EmojiPlugin(
			chartRef.current,
			seriesRef.current,
			emojiTimestamp as UTCTimestamp,
			emojiTopPosition
		)
		seriesRef.current.attachPrimitive(emojiPrimitive)
	}, [emojiTimestamp, emojiTopPosition])

	// TODO: use prev trading data while the new one is loading in
	useEffect(() => {
		if (liveTradingData && seriesRef.current) {
			setHoveredData(liveTradingData)
			seriesRef.current.update(liveTradingData)
		}
	}, [liveTradingData, setHoveredData])
	return (
		<>
			<div
				className="h-[600px] w-full"
				ref={setNodeRef}
			>
				{isLoading && <SkeletonLoadingChart />}

				<div
					ref={chartContainerRef}
					className={`z-0 relative h-full ${isLoading ? "hidden" : ""}`}
					onDragOver={(e) => e.preventDefault()}
				>
					{/* TODO: make accurate to figma (include title & volume) */}
					<div className="absolute top-8 left-2 z-10 p-2 font-mono text-sm pointer-events-none">
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
