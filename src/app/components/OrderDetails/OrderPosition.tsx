const OrderPosition = () => {
	return (
		<div className="flex">
			<div className="pt-2 px-4 pb-4 w-full border-b border-b-tertiary">
				<p className="uppercase text-tertiary text-center">Long</p>
			</div>
			<div className="pt-2 px-4 pb-4 w-full border-b border-b-black_secondary">
				<p className="uppercase text-gray text-center">Short</p>
			</div>
		</div>
	)
}

export default OrderPosition
