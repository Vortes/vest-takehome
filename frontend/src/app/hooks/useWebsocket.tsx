import { useEffect, useState } from "react"
import { TradingData, transformLiveChartData } from "../utils/transform-chart"
import { MarketType, TimeInterval } from "../utils/enums"

const useWebsocket = (
	timeInterval: TimeInterval,
	selectedMarket: MarketType
) => {
	const [liveTradingData, setLiveTradingData] = useState<TradingData>()

	useEffect(() => {
		const ws = new WebSocket("wss://devws.vest.exchange/ws-api?version=1.0")
		ws.binaryType = "arraybuffer"

		ws.onopen = () => {
			ws.send(
				JSON.stringify({
					method: "SUBSCRIBE",
					params: [`${selectedMarket}@kline_${timeInterval}`],
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

		return () => {
			ws.close()
		}
	}, [selectedMarket, timeInterval])

	return [liveTradingData]
}

export default useWebsocket
