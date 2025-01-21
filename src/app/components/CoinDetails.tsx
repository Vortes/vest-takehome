import { BitcoinIcon } from "./icons"

const CoinDetails = () => {
	return (
		<div className="flex justify-between border-b border-b-black_secondary py-2">
			{/* TODO: split this into own component */}
			<div className="flex pl-2 gap-x-2 items-center">
				<BitcoinIcon />
				<p className="uppercase text-white my-auto font-semibold font-sans flex gap-x-1">
					<span className="uppercase">BTC</span>
					<span className="uppercase">/</span>
					<span className="uppercase">BITCOIN</span>
				</p>
			</div>
			<div className="flex flex-col pl-2 gap-y-1">
				<p className="uppercase text-xs text-gray">Price</p>
				<p className="font-sans">$31,119.01</p>
			</div>
			<div className="flex flex-col pl-2 gap-y-1">
				<p className="uppercase text-xs text-gray">24h change</p>
				<p className="text-teal font-sans">+22.3 USDC (+7.5$)</p>
			</div>
			<div className="flex flex-col pl-2 gap-y-1">
				<p className="uppercase text-xs text-gray">1h funding</p>
				<p className="text-teal font-sans">0.00012%</p>
			</div>
			<div className="flex flex-col pl-2 gap-y-1">
				<p className="uppercase text-xs text-gray">long open interest</p>
				<p className="text-teal font-sans">8.871BTC</p>
			</div>
			<div className="flex flex-col pl-2 gap-y-1">
				<p className="uppercase text-xs text-gray">short open interest</p>
				<p className="text-teal font-sans">8.871BTC</p>
			</div>
		</div>
	)
}

export default CoinDetails
