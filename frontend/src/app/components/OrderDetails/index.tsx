import OrderType from "./OrderType"
import OrderSize from "./OrderSize"
import OrderFee from "./OrderFee"
import OrderPosition from "./OrderPosition"
import OrderAdvancedDetails from "./OrderAdvancedDetails"
import LeverageSlider from "./LeverageSlider"
import ConfettiButton from "./ConfettiButton"

const DetailPanel = () => {
	return (
		<div className="bg-chart_background min-w-[26%] pt-2 px-4 pb-4 flex flex-col gap-y-4 h-fit">
			<OrderPosition />
			<OrderType />
			<OrderSize />
			<LeverageSlider />
			<OrderFee />
			<OrderAdvancedDetails />
			<ConfettiButton />
		</div>
	)
}

export default DetailPanel
