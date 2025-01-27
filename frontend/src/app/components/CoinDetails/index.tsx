import { Dispatch, FC, SetStateAction } from "react"
import CoinIcon from "./CoinIcon"
import StatsContainer from "./StatsContainer"
import { MarketType } from "@/app/utils/enums"
import { useQuery } from "@tanstack/react-query"

interface CoinDetailsProps {
	selectedMarket: MarketType
	setSelectedMarket: Dispatch<SetStateAction<MarketType>>
}

interface LatestTicker {
	symbol: string
	markPrice: string
	indexPrice: string
	imbalance: string
	oneHrFundingRate: string
	cumFunding: string
	status: string
}

const CoinDetails: FC<CoinDetailsProps> = ({
	selectedMarket,
	setSelectedMarket,
}) => {
	const mockStats = [
		// { title: "Price", content: "$31,119.01" },
		{ title: "24H Change", content: "+22.3 USDC (+7.5$)" },
		// { title: "1H Funding", content: "0.00012%" },
		{ title: "Long Open Interest", content: "8.871BTC" },
		{ title: "Short Open Interest", content: "8.871BTC" },
	]

	const fetchLatestTicker = async (
		market: MarketType
	): Promise<LatestTicker> => {
		const res = await fetch(
			`https://server-mmdev.vest.exchange/v2/ticker/latest?symbols=${market}`
		)
		const rawData = await res.json()
		return rawData.tickers[0] as LatestTicker
	}

	const { isLoading, data: marketData } = useQuery({
		queryKey: ["ticker", selectedMarket],
		queryFn: ({ queryKey }) => fetchLatestTicker(queryKey[1] as MarketType),
	})

	return (
		<div className="flex justify-between border-b border-b-black_secondary py-2">
			<CoinIcon
				selectedMarket={selectedMarket}
				setSelectedMarket={setSelectedMarket}
			/>
			{isLoading ? (
				"Loading.."
			) : (
				<>
					<StatsContainer
						title="Price"
						content={marketData?.indexPrice ?? ""}
					/>
					<StatsContainer
						title="1h Funding"
						content={marketData?.oneHrFundingRate ?? ""}
					/>
				</>
			)}
			{mockStats.map((item, index) => (
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
