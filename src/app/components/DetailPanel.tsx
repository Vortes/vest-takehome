"use client"

import { Button } from "@/components/ui/button"
import {
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import LeverageSlider from "./LeverageSlider"

const DetailPanel = () => {
	const [selectedOption, setSelectedOption] = useState("Market")
	return (
		<div className="bg-chart_background w-2/6 pt-2 px-4 pb-4 flex flex-col gap-y-4">
			{/* TODO: EXPORT TO COMPONENET */}
			<div className="flex">
				<div className="pt-2 px-4 pb-4 w-full border-b border-b-tertiary">
					<p className="uppercase text-tertiary text-center">Long</p>
				</div>
				<div className="pt-2 px-4 pb-4 w-full border-b border-b-black_secondary">
					<p className="uppercase text-gray text-center">Short</p>
				</div>
			</div>

			{/* TODO: fix dropdown color */}
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

			<div className="flex flex-col gap-y-2">
				<p>Size</p>
				<Button variant={"secondary"}>0.</Button>
				<p className="text-gray">Up to 1,458.173</p>
			</div>

			<LeverageSlider />

			<div>Liqudidation price</div>
			<div>Advanced</div>
			<Button className="uppercase">Buy / Long</Button>
		</div>
	)
}

export default DetailPanel
