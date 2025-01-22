import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { ChevronsUpDown } from "lucide-react"

import { useState } from "react"
import { Button } from "../ui/button"

const OrderType = () => {
	const [selectedOption, setSelectedOption] = useState("Market")

	return (
		<div className="flex gap-x-2">
			<div className="flex flex-col gap-y-2 w-full">
				<p>Order type</p>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="secondary"
							className="flex items-center gap-2"
						>
							{selectedOption}
							<ChevronsUpDown className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-32">
						<DropdownMenuItem onClick={() => setSelectedOption("Market")}>
							Market
						</DropdownMenuItem>
						<DropdownMenuItem onClick={() => setSelectedOption("Limit")}>
							Limit
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
			<div className="flex flex-col gap-y-1 w-2/3">
				<p className="text-gray">Open Price</p>
				<p>30,021.29 USDC</p>
			</div>
		</div>
	)
}

export default OrderType
