"use client"

import { useEffect, useRef } from "react"
import { createChart, ColorType } from "lightweight-charts"
import { TradingData } from "../utils/transform-chart"

interface TradingChartProps {
	liveTradingData: TradingData[] | null
	intervalTradingData: TradingData[] | null
}

const TradingChart: React.FC<TradingChartProps> = ({
	liveTradingData,
	intervalTradingData,
}) => {
	const chartContainerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (!intervalTradingData || !chartContainerRef.current || !liveTradingData)
			return

		const chart = createChart(chartContainerRef.current, {
			width: chartContainerRef.current.clientWidth,
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

		const candlestickSeries = chart.addCandlestickSeries({
			upColor: "#26a69a",
			downColor: "#ef5350",
			borderVisible: false,
			wickUpColor: "#26a69a",
			wickDownColor: "#ef5350",
		})

		candlestickSeries.setData(intervalTradingData)
		candlestickSeries.update(liveTradingData)

		const handleResize = () => {
			if (chartContainerRef.current) {
				chart.applyOptions({ width: chartContainerRef.current.clientWidth })
			}
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
			chart.remove()
		}
	}, [intervalTradingData, liveTradingData])

	return (
		<div
			ref={chartContainerRef}
			className="w-full h-[400px]"
		/>
	)
}

export default TradingChart
