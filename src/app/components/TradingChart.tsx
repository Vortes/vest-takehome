"use client"

import { useEffect, useRef, useState } from "react"
import {
	createChart,
	ColorType,
	IChartApi,
	ISeriesApi,
} from "lightweight-charts"
import { TradingData } from "../utils/transform-chart"
import { Skeleton } from "@/app/components/ui/skeleton"
import SkeletonLoadingChart from "./SkeletonLoadingChart"

interface TradingChartProps {
	liveTradingData: TradingData | null
	intervalTradingData: TradingData[] | null
}

interface OHLCData {
	time: string
	open: number
	high: number
	low: number
	close: number
}

const TradingChart: React.FC<TradingChartProps> = ({
	liveTradingData,
	intervalTradingData,
}) => {
	const chartContainerRef = useRef<HTMLDivElement>()
	const chartRef = useRef<IChartApi | null>(null)
	const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null)
	const [hoveredData, setHoveredData] = useState<OHLCData>()
	const [isLoading, setIsLoading] = useState(false)

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

		setTimeout(handleResize, 0)

		return () => {
			window.removeEventListener("resize", handleResize)
			chartRef.current?.remove()
			chartRef.current = null
			seriesRef.current = null
		}
	}, [intervalTradingData])

	useEffect(() => {
		if (liveTradingData && seriesRef.current) {
			setHoveredData(liveTradingData)
			seriesRef.current.update(liveTradingData)
		}
	}, [liveTradingData])

	return (
		<div>
			{/* <div className="absolute top-0 left-0 z-10 p-2 font-mono text-sm">
				<div className="flex gap-4 text-[#26a69a]">
					<span>O {hoveredData?.open.toFixed(2)}</span>
					<span>H {hoveredData?.high.toFixed(2)}</span>
					<span>L {hoveredData?.low.toFixed(2)}</span>
					<span>C {hoveredData?.close.toFixed(2)}</span>
				</div>
			</div> */}

			{isLoading && <SkeletonLoadingChart />}
			<div
				ref={chartContainerRef}
				className={`h-[650px] ${isLoading ? "hidden" : ""}`}
			/>
			{/* <div
				ref={chartContainerRef}
				className="h-[551px]"
			/> */}
		</div>
	)
}

export default TradingChart
