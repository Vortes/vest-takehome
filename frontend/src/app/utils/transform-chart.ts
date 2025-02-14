import { UTCTimestamp } from "lightweight-charts"

interface RawData {
	0: number // open time
	1: string // o
	2: string // h
	3: string // l
	4: string // c
	5: number // close time
	6: string // v
	7: string // quote v
	8: number // num of trades
}

export interface TradingData {
	time: UTCTimestamp
	open: number
	high: number
	low: number
	close: number
	closeTime: number
	volume: number
	quoteVolume: number
	trades: number
}

export function transformIntervalChartData(rawData: RawData[]): TradingData[] {
	return rawData.map((data) => {
		return {
			time: Math.floor(data[0] / 1000) as UTCTimestamp,
			open: parseFloat(data[1]),
			high: parseFloat(data[2]),
			low: parseFloat(data[3]),
			close: parseFloat(data[4]),
			closeTime: data[5],
			volume: parseFloat(data[6]),
			quoteVolume: parseFloat(data[7]),
			trades: data[8],
		}
	})
}

export function transformLiveChartData(rawData: RawData): TradingData {
	const liveData = {
		time: Math.floor(rawData[0] / 1000) as UTCTimestamp,
		open: parseFloat(rawData[1]),
		high: parseFloat(rawData[2]),
		low: parseFloat(rawData[3]),
		close: parseFloat(rawData[4]),
		closeTime: rawData[5],
		volume: parseFloat(rawData[6]),
		quoteVolume: parseFloat(rawData[7]),
		trades: rawData[8],
	}
	return liveData
}
