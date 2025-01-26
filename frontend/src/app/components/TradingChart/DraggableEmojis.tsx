import { useDraggable } from "@dnd-kit/core"
import { FC } from "react"

interface DraggableEmojisProps {
	emoji: string
}

const DraggableEmojis: FC<DraggableEmojisProps> = ({ emoji }) => {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: emoji,
	})
	const style = transform
		? {
				transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
		  }
		: undefined
	return (
		<>
			<div
				ref={setNodeRef}
				{...listeners}
				{...attributes}
				style={style}
			>
				{emoji}
			</div>
		</>
	)
}

export default DraggableEmojis
