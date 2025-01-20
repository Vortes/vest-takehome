const ChartPricingDetails = () => {
	return (
		<div className="relative">
			<div className="absolute top-0 left-0 z-10 p-2 font-mono text-sm">
				<div className="text-gray-300">{symbol} · 1H</div>
				<div className="flex gap-4 text-[#26a69a]">
					<span>O {currentData?.open.toFixed(2)}</span>
					<span>H {currentData?.high.toFixed(2)}</span>
					<span>L {currentData?.low.toFixed(2)}</span>
					<span>C {currentData?.close.toFixed(2)}</span>
					<span>
						{change.value.toFixed(2)} ({change.percentage.toFixed(2)}%)
					</span>
				</div>
				<div className="text-gray-300">Volume SMA 9 3</div>
			</div>
			<div ref={chartContainerRef} />
		</div>
	)
}

export default ChartPricingDetails
