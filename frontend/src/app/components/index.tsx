"use client"
import DetailPanel from "./OrderDetails"
import CoinDetails from "./CoinDetails"
import Navbar from "./Navbar/Navbar"
import TradingChart from "./TradingChart"
import FundingPriceToggle from "./PriceFundingToggle"

const App: React.FC = () => {
	return (
		<>
			<div className="flex flex-col gap-y-6">
				<Navbar />
				<div className="flex flex-col gap-y-4">
					<CoinDetails />
					<FundingPriceToggle />

					<div className="grid grid-cols-4 gap-x-4">
						<div className="col-span-3">
							<TradingChart />
						</div>
						<DetailPanel />
					</div>
				</div>
			</div>
		</>
	)
}

export default App
