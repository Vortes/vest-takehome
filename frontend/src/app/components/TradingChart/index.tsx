"use client"

import dynamic from "next/dynamic"
import { DndContext } from "@dnd-kit/core"
const EmojiPicker = dynamic(() => import("./EmojiPicker"), { ssr: false })
import Chart from "./Chart"
import { useState } from "react"
import { TradingData } from "@/app/utils/transform-chart"

export interface OHLCData extends TradingData {
	time: number
	open: number
	high: number
	low: number
	close: number
}

const TradingChart = () => {
	const [hoveredData, setHoveredData] = useState<OHLCData>()
	const [dragStarted, setDragStarted] = useState(false)
	const [emojiTimestamp, setEmojiTimestamp] = useState<number | null>(null)
	const [emojiTopPosition, setEmojiTopPosition] = useState<number | null>(null)
	const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null)

	const handleDragStart = (e) => {
		setDragStarted(true)
	}

	const handleDragEnd = (e) => {
		if (e.over && e.over.id === "trading-chart") {
			const { active, over } = e

			if (hoveredData?.time) {
				setEmojiTimestamp(hoveredData?.time)
			}
			const scrollOffset = window.scrollY
			const chartTopPosition = over.rect.top + scrollOffset
			setSelectedEmoji(active.id)
			setEmojiTopPosition(
				active.rect.current.translated.top + scrollOffset - chartTopPosition
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
				/>
				<EmojiPicker dragStarted={dragStarted} />
			</div>
		</DndContext>
	)
}

export default TradingChart
