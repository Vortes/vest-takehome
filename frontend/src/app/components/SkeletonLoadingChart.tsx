import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card"
import { Skeleton } from "@/app/components/ui/skeleton"

const SkeletonLoadingChart = () => {
	return (
		<Card className="w-full h-[600px]">
			<CardHeader className="space-y-2">
				<CardTitle>
					<Skeleton className="h-6 w-1/3" />
				</CardTitle>
				<Skeleton className="h-4 w-1/2" />
			</CardHeader>
			<CardContent>
				<div className="space-y-2">
					<Skeleton className="h-[400px]" />
				</div>
			</CardContent>
		</Card>
	)
}

export default SkeletonLoadingChart
