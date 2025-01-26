import { BitcoinIcon } from "../icons"
const CoinIcon = () => {
	return (
		<div className="flex pl-2 gap-x-2 items-center">
			<BitcoinIcon />
			<p className="uppercase text-white my-auto font-semibold font-sans flex gap-x-1">
				<span className="uppercase">BTC</span>
				<span className="uppercase">/</span>
				<span className="uppercase">BITCOIN</span>
			</p>
		</div>
	)
}

export default CoinIcon
