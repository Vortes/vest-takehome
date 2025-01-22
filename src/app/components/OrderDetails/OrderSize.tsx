const OrderSize = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<p>Size</p>
			<div className="flex justify-between bg-black_secondary items-center p-2 h-12 rounded-sm">
				<p>0</p>
				<p className="text-gray text-sm">USDC</p>
			</div>
			<p className="text-gray">Up to 1,458.173</p>
		</div>
	)
}

export default OrderSize
