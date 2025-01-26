import {
	IChartApi,
	ISeriesApi,
	ISeriesPrimitive,
	ISeriesPrimitivePaneRenderer,
	ISeriesPrimitivePaneView,
	SeriesType,
	Time,
} from "lightweight-charts"
import { CanvasRenderingTarget2D } from "fancy-canvas"
import { positionsLine } from "./positions"

class EmojiPaneRenderer implements ISeriesPrimitivePaneRenderer {
	_x: number
	_y: number
	constructor(x: number, y: number) {
		this._x = x
		this._y = y
	}
	draw(target: CanvasRenderingTarget2D): void {
		target.useBitmapCoordinateSpace((scope) => {
			const position = positionsLine(this._x, scope.horizontalPixelRatio)
			const ctx = scope.context
			ctx.font = "32px serif"
			console.log("plugin y: ", this._y)
			ctx.fillText("🚀", position.position, this._y)
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
		// const price = this._source.getPricescale()
		const timeScale = this._source.getChart().timeScale()
		// const priceScale = this._source.getSeries()

		const x = timeScale.timeToCoordinate(timestamp)
		const y = this._source.getPricescale()
		// const y = priceScale.priceToCoordinate(price)
		if (x === null || y === null) return null
		return new EmojiPaneRenderer(x, y)
	}
}

export class EmojiPlugin implements ISeriesPrimitive<Time> {
	_chart: IChartApi
	_series: ISeriesApi<SeriesType>
	_paneViews: EmojiPaneView[]
	_timestamp: Time
	_pricescale: number

	constructor(
		chart: IChartApi,
		series: ISeriesApi<SeriesType>,
		timestamp: Time,
		pricescale: number
	) {
		this._chart = chart
		this._series = series
		this._timestamp = timestamp
		this._pricescale = pricescale
		this._paneViews = [new EmojiPaneView(this)]
	}

	getChart(): IChartApi {
		return this._chart
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
}
