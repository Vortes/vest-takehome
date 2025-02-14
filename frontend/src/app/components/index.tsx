"use client"
import DetailPanel from "./OrderDetails"
import CoinDetails from "./CoinDetails"
import Navbar from "./Navbar/Navbar"
import TradingChart from "./TradingChart"
import FundingPriceToggle from "./PriceFundingToggle"
import { useState } from "react"
import { MarketType } from "../utils/enums"

const App: React.FC = () => {
	const [selectedMarket, setSelectedMarket] = useState<MarketType>(
		MarketType.ETH
	)
	return (
		<>
			<div className="flex flex-col gap-y-6">
				<Navbar />
				<div className="flex flex-col gap-y-4">
					<CoinDetails
						selectedMarket={selectedMarket}
						setSelectedMarket={setSelectedMarket}
					/>
					<FundingPriceToggle />

					<div className="grid grid-cols-4 gap-x-4">
						<div className="col-span-3">
							<TradingChart
								selectedMarket={selectedMarket}
								setSelectedMarket={setSelectedMarket}
							/>
						</div>
						<DetailPanel />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
