const OrderFee = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<div className="flex justify-between">
				<p className="text-gray">Liquidation Price</p>
				<p>300,212 USDC</p>
			</div>
			<div className="flex justify-between">
				<p className="text-gray">Slippage</p>
				<p>1.20 USDC (0.3%)</p>
			</div>
			<div className="flex justify-between">
				<p className="text-gray">Fee</p>
				<p>2.00 USDC (0.05%)</p>
			</div>
		</div>
	)
}

export default OrderFee
