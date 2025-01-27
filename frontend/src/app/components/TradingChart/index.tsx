"use client"

import dynamic from "next/dynamic"
import { DndContext, DragEndEvent } from "@dnd-kit/core"
const EmojiPicker = dynamic(() => import("./EmojiPicker"), { ssr: false })
import Chart from "./Chart"
import { Dispatch, FC, SetStateAction, useState } from "react"
import { TradingData } from "@/app/utils/transform-chart"
import { MarketType, TimeInterval } from "@/app/utils/enums"
import TimeIntervalPicker from "./TimeIntervalPicker"
import { UTCTimestamp } from "lightweight-charts"

export interface OHLCData extends TradingData {
	time: UTCTimestamp
	open: number
	high: number
	low: number
	close: number
}

interface TradingChartProps {
	selectedMarket: MarketType
	setSelectedMarket: Dispatch<SetStateAction<MarketType>>
}

const TradingChart: FC<TradingChartProps> = ({
	selectedMarket,
	setSelectedMarket,
}) => {
	const [hoveredData, setHoveredData] = useState<OHLCData>()
	const [dragStarted, setDragStarted] = useState(false)

	const [emojiTimestamp, setEmojiTimestamp] = useState<number | null>(null)
	const [emojiTopPosition, setEmojiTopPosition] = useState<number | null>(null)
	const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

	const [timeInterval, setTimeInterval] = useState<TimeInterval>(
		TimeInterval.ONE_MINUTE
	)

	const handleDragStart = () => {
		setDragStarted(true)
	}

	const handleDragEnd = (e: DragEndEvent) => {
		setDragStarted(false)
		if (e.over && e.over.id === "trading-chart") {
			const { active, over } = e

			if (hoveredData?.time) {
				setEmojiTimestamp(hoveredData?.time)
			}
			const scrollOffset = window.scrollY
			const chartTopPosition = over.rect.top + scrollOffset
			setSelectedEmoji(active.id as string)
			setEmojiTopPosition(
				active.rect.current?.translated?.top + scrollOffset - chartTopPosition
			)
			setDragStarted(false)
		}
	}

	return (
		<DndContext
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
		>
			<div className="flex flex-col gap-y-4 ">
				<Chart
					hoveredData={hoveredData}
					setHoveredData={setHoveredData}
					emojiTimestamp={emojiTimestamp}
					emojiTopPosition={emojiTopPosition}
					selectedEmoji={selectedEmoji}
					selectedMarket={selectedMarket}
					setSelectedMarket={setSelectedMarket}
					timeInterval={timeInterval}
				/>
				<div className="flex gap-x-4">
					<EmojiPicker dragStarted={dragStarted} />
					<TimeIntervalPicker setTimeInterval={setTimeInterval} />
				</div>
			</div>
		</DndContext>
	)
}

export default TradingChart
