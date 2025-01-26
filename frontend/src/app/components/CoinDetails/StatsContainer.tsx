interface StatsContainerProps {
	title: string
	content: string
}

const StatsContainer: React.FC<StatsContainerProps> = ({ title, content }) => {
	return (
		<div className="flex flex-col pl-2 gap-y-1">
			<p className="uppercase text-xs text-gray">{title}</p>
			<p className="font-sans">{content}</p>
		</div>
	)
}

export default StatsContainer
