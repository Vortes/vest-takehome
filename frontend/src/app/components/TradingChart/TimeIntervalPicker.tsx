import { TimeInterval } from "@/app/utils/enums"
import { Dispatch, FC, SetStateAction, useState } from "react"

interface TimeIntervalPickerProps {
	setTimeInterval: Dispatch<SetStateAction<TimeInterval>>
}

const TimeIntervalPicker: FC<TimeIntervalPickerProps> = ({
	setTimeInterval,
}) => {
	const [selectedTime, setSelectedTime] = useState<TimeInterval>(
		TimeInterval.ONE_MINUTE
	)

	const handleIntervalChange = (interval: TimeInterval) => {
		setSelectedTime(interval)
		setTimeInterval(interval)
	}

	return (
		//TODO: generate dynamically && break into components
		<div className="bg-[#252525] rounded-full flex gap-x-4 w-fit px-4 py-2 items-center">
			<p
				onClick={() => handleIntervalChange(TimeInterval.ONE_MINUTE)}
				className={`uppercase text-sm hover:cursor-pointer hover:text-tertiary ${
					selectedTime === TimeInterval.ONE_MINUTE && "text-teal"
				}`}
			>
				1m
			</p>
			<p
				onClick={() => handleIntervalChange(TimeInterval.ONE_HOUR)}
				className={`uppercase text-sm hover:cursor-pointer hover:text-tertiary ${
					selectedTime === TimeInterval.ONE_HOUR && "text-teal"
				}`}
			>
				1h
			</p>
			<p
				onClick={() => handleIntervalChange(TimeInterval.ONE_DAY)}
				className={`uppercase text-sm hover:cursor-pointer hover:text-tertiary ${
					selectedTime === TimeInterval.ONE_DAY && "text-teal"
				}`}
			>
				1d
			</p>
		</div>
	)
}

export default TimeIntervalPicker
