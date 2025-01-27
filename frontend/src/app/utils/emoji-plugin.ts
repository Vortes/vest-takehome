import {
	IChartApi,
	ISeriesApi,
	ISeriesPrimitive,
	ISeriesPrimitivePaneRenderer,
	ISeriesPrimitivePaneView,
	SeriesAttachedParameter,
	SeriesOptionsMap,
	SeriesType,
	Time,
} from "lightweight-charts"
import { CanvasRenderingTarget2D } from "fancy-canvas"
import { positionsLine } from "./positions"

class EmojiPaneRenderer implements ISeriesPrimitivePaneRenderer {
	_x: number
	_y: number
	_emoji: string
	constructor(x: number, y: number, emoji: string) {
		this._x = x
		this._y = y
		this._emoji = emoji
	}
	draw(target: CanvasRenderingTarget2D): void {
		target.useBitmapCoordinateSpace((scope) => {
			const ctx = scope.context
			const emojiWidthPixels = 32
			const emojiWidthMedia = emojiWidthPixels / scope.horizontalPixelRatio

			const position = positionsLine(
				this._x,
				scope.horizontalPixelRatio,
				emojiWidthMedia
			)
			const position_y = positionsLine(this._y, scope.horizontalPixelRatio, -32)

			ctx.font = `${emojiWidthPixels}px serif`
			ctx.fillText(this._emoji, position.position, position_y.position)
		})
	}
}

class EmojiPaneView implements ISeriesPrimitivePaneView {
	_source: EmojiPlugin

	constructor(source: EmojiPlugin) {
		this._source = source
	}

	renderer(): ISeriesPrimitivePaneRenderer | null {
		const timestamp = this._source.getTimestamp()
		const timeScale = this._source.getChart().timeScale()

		const x = timeScale.timeToCoordinate(timestamp)
		const y = this._source.getPricescale()
		const emoji = this._source.getEmoji()
		if (x === null || y === null || emoji === null) return null
		return new EmojiPaneRenderer(x, y, emoji)
	}
}

export class EmojiPlugin implements ISeriesPrimitive<Time> {
	_chart: IChartApi
	_series: ISeriesApi<SeriesType>
	_paneViews: EmojiPaneView[]
	_emoji: string
	_timestamp: Time
	_pricescale: number

	constructor(
		chart: IChartApi,
		series: ISeriesApi<SeriesType>,
		emoji: string,
		timestamp: Time,
		pricescale: number
	) {
		this._chart = chart
		this._series = series
		this._emoji = emoji
		this._timestamp = timestamp
		this._pricescale = pricescale
		this._paneViews = [new EmojiPaneView(this)]
	}

	getChart(): IChartApi {
		return this._chart
	}

	getEmoji(): string {
		return this._emoji
	}

	getTimestamp(): Time {
		return this._timestamp
	}

	getPricescale(): number {
		return this._pricescale
	}

	getSeries(): ISeriesApi<SeriesType> {
		return this._series
	}

	paneViews() {
		return this._paneViews
	}

	// to my understanding, redraws as soon as attached.
	attached(param: SeriesAttachedParameter<Time, keyof SeriesOptionsMap>): void {
		param.requestUpdate()
	}
}
