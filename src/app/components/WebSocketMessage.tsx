"use client"
import { useEffect, useState } from "react"
import TradingChart from "./TradingChart"
import {
	TradingData,
	transformIntervalChartData,
	transformLiveChartData,
} from "../utils/transform-chart"

const WebSocketComponent: React.FC = () => {
	const [intervalTradingData, setIntervalTradingData] = useState<
		TradingData[] | null
	>()
	const [liveTradingData, setLiveTradingData] = useState<TradingData[] | null>()

	useEffect(() => {
		async function fetchIntervalTradingData() {
			const res = await fetch(
				"https://server-mmdev.vest.exchange/v2/klines?symbol=ETH-PERP&interval=1m&limit=500"
			)
			const rawData = await res.json()
			const formattedData = transformIntervalChartData(rawData)
			// console.log(formattedData)
			setIntervalTradingData(formattedData)
			// setIntervalTradingData(formattedData)
		}

		fetchIntervalTradingData()
	}, [])

	useEffect(() => {
		const ws = new WebSocket("wss://devws.vest.exchange/ws-api?version=1.0")
		ws.binaryType = "arraybuffer"

		ws.onopen = () => {
			ws.send(
				JSON.stringify({
					method: "SUBSCRIBE",
					params: ["ETH-PERP@kline_1m"],
					id: 1,
				})
			)
		}

		ws.onmessage = (event) => {
			const jsonString = Buffer.from(new Uint8Array(event.data)).toString(
				"utf8"
			)
			const rawData = JSON.parse(jsonString)

			if (rawData && rawData.data) {
				const formattedData = transformLiveChartData(rawData.data)
				setLiveTradingData(formattedData)
			}
		}

		ws.onerror = (error) => {
			console.error("WebSocket error:", error)
		}

		ws.onclose = (e) => {
			console.log("WebSocket connection closed: ", e.code)
		}

		// Cleanup when component unmounts
		return () => {
			ws.close()
		}
	}, [])

	return (
		<TradingChart
			liveTradingData={liveTradingData}
			intervalTradingData={intervalTradingData}
		/>
	)
}

export default WebSocketComponent
