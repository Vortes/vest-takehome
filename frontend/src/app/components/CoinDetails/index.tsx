import { Dispatch, FC, SetStateAction } from "react"
import CoinIcon from "./CoinIcon"
import StatsContainer from "./StatsContainer"
import { MarketType } from "@/app/utils/enums"

interface CoinDetailsProps {
	selectedMarket: MarketType
	setSelectedMarket: Dispatch<SetStateAction<MarketType>>
}

const CoinDetails: FC<CoinDetailsProps> = ({
	selectedMarket,
	setSelectedMarket,
}) => {
	const coinStats = [
		{ title: "Price", content: "$31,119.01" },
		{ title: "24H Change", content: "+22.3 USDC (+7.5$)" },
		{ title: "1H Funding", content: "0.00012%" },
		{ title: "Long Open Interest", content: "8.871BTC" },
		{ title: "Short Open Interest", content: "8.871BTC" },
	]
	return (
		<div className="flex justify-between border-b border-b-black_secondary py-2">
			<CoinIcon
				selectedMarket={selectedMarket}
				setSelectedMarket={setSelectedMarket}
			/>
			{coinStats.map((item, index) => (
				<StatsContainer
					key={index}
					title={item.title}
					content={item.content}
				/>
			))}
		</div>
	)
}

export default CoinDetails
