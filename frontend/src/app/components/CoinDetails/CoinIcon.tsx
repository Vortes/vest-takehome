import { Dispatch, FC, SetStateAction, useEffect } from "react"
import { BitcoinIcon } from "../icons"
import { useQuery } from "@tanstack/react-query"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { Button } from "../ui/button"
import { ChevronsUpDown } from "lucide-react"
import { MarketType } from "@/app/utils/enums"
interface CoinIconProps {
	selectedMarket: MarketType
	setSelectedMarket: Dispatch<SetStateAction<MarketType>>
}
const CoinIcon: FC<CoinIconProps> = ({ selectedMarket, setSelectedMarket }) => {
	return (
		<div className="flex pl-2 gap-x-2 items-center">
			<BitcoinIcon />
			{/* <p className="uppercase text-white my-auto font-semibold font-sans flex gap-x-1">
				<span className="uppercase">{selectedMarket}</span>
				<span className="uppercase">/</span>
				<span className="uppercase">BITCOIN</span>
			</p> */}

			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						variant="ghost"
						className="flex items-center gap-2 text-white font-sans font-semibold tracking-wide"
					>
						{selectedMarket}
						<ChevronsUpDown className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-32">
					<DropdownMenuItem
						className="uppercase"
						onClick={() => setSelectedMarket(MarketType.ETH)}
					>
						Ethereum-PERP
					</DropdownMenuItem>
					<DropdownMenuItem
						className="uppercase"
						onClick={() => setSelectedMarket(MarketType.BTC)}
					>
						Bitcoin-PERP
					</DropdownMenuItem>
					<DropdownMenuItem
						className="uppercase"
						onClick={() => setSelectedMarket(MarketType.DODGE)}
					>
						Doge-PERP
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default CoinIcon
