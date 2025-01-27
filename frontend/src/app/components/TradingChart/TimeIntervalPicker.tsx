import { TimeInterval } from "@/app/utils/enums"
import { Dispatch, FC, SetStateAction } from "react"

interface TimeIntervalPickerProps {
	setTimeInterval: Dispatch<SetStateAction<TimeInterval>>
}

const TimeIntervalPicker: FC<TimeIntervalPickerProps> = ({
	setTimeInterval,
}) => {
	return (
		<div className="bg-[#252525] rounded-full flex gap-x-4 w-fit px-4 py-2 items-center">
			<p
				onClick={() => setTimeInterval(TimeInterval.ONE_MINUTE)}
				className="uppercase text-sm hover:cursor-pointer hover:text-teal"
			>
				1 min
			</p>
			<p
				onClick={() => setTimeInterval(TimeInterval.ONE_HOUR)}
				className="uppercase text-sm hover:cursor-pointer hover:text-teal"
			>
				1h
			</p>
			<p
				onClick={() => setTimeInterval(TimeInterval.ONE_DAY)}
				className="uppercase text-sm hover:cursor-pointer hover:text-teal"
			>
				1d
			</p>
		</div>
	)
}

export default TimeIntervalPicker
