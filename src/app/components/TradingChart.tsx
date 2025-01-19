"use client"

import { useEffect, useRef } from "react"
import {
	createChart,
	ColorType,
	IChartApi,
	ISeriesApi,
} from "lightweight-charts"
import { TradingData } from "../utils/transform-chart"

interface TradingChartProps {
	liveTradingData: TradingData | null
	intervalTradingData: TradingData[] | null
}

const TradingChart: React.FC<TradingChartProps> = ({
	liveTradingData,
	intervalTradingData,
}) => {
	const chartContainerRef = useRef<HTMLDivElement>(null)
	const chartRef = useRef<IChartApi | null>(null)
	const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null)

	useEffect(() => {
		if (!intervalTradingData || !chartContainerRef.current) return

		chartRef.current = createChart(chartContainerRef.current, {
			width: chartContainerRef.current?.clientWidth,
			height: 400,
			layout: {
				background: { type: ColorType.Solid, color: "#ffffff" },
				textColor: "#333",
			},
			grid: {
				vertLines: { color: "#f0f0f0" },
				horzLines: { color: "#f0f0f0" },
			},
		})

		seriesRef.current = chartRef.current.addCandlestickSeries({
			upColor: "#26a69a",
			downColor: "#ef5350",
			borderVisible: false,
			wickUpColor: "#26a69a",
			wickDownColor: "#ef5350",
		})
		console.log(intervalTradingData)
		seriesRef.current.setData(intervalTradingData)

		const handleResize = () => {
			if (chartRef.current && chartContainerRef.current) {
				chartRef.current.applyOptions({
					width: chartContainerRef.current.clientWidth,
				})
			}
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
			chartRef.current?.remove()
			chartRef.current = null
			seriesRef.current = null
		}
	}, [intervalTradingData])

	useEffect(() => {
		if (liveTradingData && seriesRef.current) {
			seriesRef.current.update(liveTradingData)
		}
	}, [liveTradingData])

	return (
		<div
			ref={chartContainerRef}
			className="w-4/6 h-[400px] mt-20 ml-12"
		/>
	)
}

export default TradingChart
