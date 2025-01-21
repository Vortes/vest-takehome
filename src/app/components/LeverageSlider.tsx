"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"

const leverageMarks = [
	{ value: 0, label: "2X" },
	{ value: 16.67, label: "5X" },
	{ value: 33.33, label: "10X" },
	{ value: 50, label: "25X" },
	{ value: 66.67, label: "50X" },
	{ value: 83.33, label: "100X" },
	{ value: 100, label: "128X" },
]

const LeverageSlider = () => {
	const [value, setValue] = React.useState([0])

	const getCurrentLeverage = (value: number) => {
		const mark = leverageMarks.find((mark, index) => {
			const nextMark = leverageMarks[index + 1]
			return value >= mark.value && (!nextMark || value < nextMark.value)
		})
		return mark?.label || "0.00X"
	}

	return (
		<div className="flex flex-col gap-y-4 mb-6 ">
			<div className="flex justify-between">
				<span className="text-white ">Leverage</span>
				<span className="text-white ">{getCurrentLeverage(value[0])}</span>
			</div>
			<div className="relative">
				<div className="absolute w-full flex justify-between px-2 -mt-1">
					{leverageMarks.map((mark) => (
						<div
							key={mark.value}
							className={`w-[2.5px] h-4 rounded-md z-10 ${
								mark.value === 0 ? "bg-transparent" : "bg-[#818181]"
							}`}
							style={{ transform: "translateX(-10%)" }}
						/>
					))}
				</div>
				<Slider
					value={value}
					onValueChange={setValue}
					max={100}
					step={16.67}
					className="w-full"
				/>
				<div className="absolute w-full flex justify-between mt-2">
					{leverageMarks.map((mark) => (
						<span
							key={mark.value}
							className="text-gray-400 text-xs"
							style={{ transform: "translateX(50%)" }}
						>
							{mark.label}
						</span>
					))}
				</div>
			</div>
		</div>
	)
}

export default LeverageSlider
