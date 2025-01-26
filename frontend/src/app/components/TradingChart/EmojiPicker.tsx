"use client"
import { useDraggable } from "@dnd-kit/core"
import { FC } from "react"

interface EmojiPickerProps {
	dragStarted: boolean
}

const EmojiPicker: FC<EmojiPickerProps> = ({ dragStarted }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: "emoji",
	})
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined
	return (
		<div
			className={`flex py-2 px-4 gap-x-4 bg-[#252525] w-fit rounded-full ${
				dragStarted && "pointer-events-none"
			}`}
		>
			<div
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				style={style}
			>
				🚀
			</div>
			<div>😍</div>
			<div>😡</div>
			<div>😭</div>
			<div>😱</div>
			<div>🚀</div>
			<div>👎🏼</div>
		</div>
	)
}

export default EmojiPicker
