"use client"

import { useEffect, useRef, useState } from "react"
import {
	createChart,
	ColorType,
	IChartApi,
	ISeriesApi,
} from "lightweight-charts"
import {
	TradingData,
	transformIntervalChartData,
} from "../../utils/transform-chart"
import SkeletonLoadingChart from "../SkeletonLoadingChart"
import useWebsocket from "@/app/hooks/useWebsocket"

interface OHLCData extends TradingData {
	time: number
	open: number
	high: number
	low: number
	close: number
}

const TradingChart = () => {
	const chartContainerRef = useRef<HTMLDivElement>(null)
	const chartRef = useRef<IChartApi | null>(null)
	const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null)

	const [hoveredData, setHoveredData] = useState<OHLCData>()
	const [isLoading, setIsLoading] = useState(true)
	const [intervalTradingData, setIntervalTradingData] = useState<
		TradingData[] | null
	>()

	const [isReady, liveTradingData] = useWebsocket()

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
		if (chartRef.current) {
			const handler = chartRef.current.subscribeCrosshairMove((param) => {
				const candleData = param.seriesData.get(seriesRef.current) as OHLCData
				setHoveredData(candleData)
			})

			return () => {
				chartRef.current?.unsubscribeCrosshairMove(handler)
			}
		}
	}, [liveTradingData])

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

		return () => {
			window.removeEventListener("resize", handleResize)
			chartRef.current?.remove()
			chartRef.current = null
			seriesRef.current = null
		}
	}, [intervalTradingData])

	// TODO: use prev trading data while the new one is loading in
	useEffect(() => {
		if (liveTradingData && seriesRef.current) {
			setHoveredData(liveTradingData)
			seriesRef.current.update(liveTradingData)
		}
	}, [liveTradingData])

	return (
		<div>
			{isLoading && <SkeletonLoadingChart />}

			<div
				ref={chartContainerRef}
				className={`relative h-[650px] ${isLoading ? "hidden" : ""}`}
			>
				{/* TODO: make accurate to figma (include title & volume) */}
				<div className="absolute top-8 left-2 z-10 p-2 font-mono text-sm">
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
	)
}

export default TradingChart
