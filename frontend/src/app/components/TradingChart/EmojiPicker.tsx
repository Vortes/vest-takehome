"use client"
import { FC } from "react"
import DraggableEmojis from "./DraggableEmojis"

interface EmojiPickerProps {
	dragStarted: boolean
}
const EMOJIS = ["🚀", "😍", "😡", "😭", "😱", "👎"]

const EmojiPicker: FC<EmojiPickerProps> = ({ dragStarted }) => {
	return (
		<div
			className={`flex py-2 px-4 gap-x-4 bg-[#252525] w-fit rounded-full ${
				dragStarted && "pointer-events-none"
			}`}
		>
			{EMOJIS.map((emoji, key) => (
				<DraggableEmojis
					emoji={emoji}
					key={key}
				/>
			))}
		</div>
	)
}

export default EmojiPicker
