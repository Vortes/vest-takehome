import {
	IChartApi,
	ISeriesApi,
	SeriesType,
	UTCTimestamp,
} from "lightweight-charts"
import { EmojiPlugin } from "./emoji-plugin"

const addEmojiPrimitive = (
	chart: IChartApi | null,
	series: ISeriesApi<SeriesType> | null,
	emoji: string,
	timestamp: UTCTimestamp,
	position: number
) => {
	if (!chart || !series) return

	const primitive = new EmojiPlugin(chart, series, emoji, timestamp, position)
	series.attachPrimitive(primitive)
}

export default addEmojiPrimitive
