import { Dispatch, FC, SetStateAction } from "react"
import { BitcoinIcon } from "../icons"
import {} from "@tanstack/react-query"
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
			{/*INFO: ideally keep this info in the url so that it remains after refresh */}
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
				<DropdownMenuContent className="relative z-50 w-fit bg-black_secondary rounded-md">
					<DropdownMenuItem
						className="uppercase px-4 py-2"
						onClick={() => setSelectedMarket(MarketType.ETH)}
					>
						Ethereum-PERP
					</DropdownMenuItem>
					<DropdownMenuItem
						className="uppercase px-4 py-2"
						onClick={() => setSelectedMarket(MarketType.BTC)}
					>
						Bitcoin-PERP
					</DropdownMenuItem>
					<DropdownMenuItem
						className="uppercase px-4 py-2"
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
