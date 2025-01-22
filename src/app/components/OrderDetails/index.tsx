"use client"

import { Button } from "@/app/components/ui/button"
import LeverageSlider from "../LeverageSlider"
import OrderType from "./OrderType"
import OrderSize from "./OrderSize"
import OrderFee from "./OrderFee"
import OrderPosition from "./OrderPosition"
import OrderAdvancedDetails from "./OrderAdvancedDetails"

const DetailPanel = () => {
	return (
		<div className="bg-chart_background w-2/6 pt-2 px-4 pb-4 flex flex-col gap-y-4">
			<OrderPosition />
			<OrderType />
			<OrderSize />
			<LeverageSlider />
			<OrderFee />
			<OrderAdvancedDetails />
			<Button className="uppercase">Buy / Long</Button>
		</div>
	)
}

export default DetailPanel
