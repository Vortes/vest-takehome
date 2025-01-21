import { cn } from "@/lib/utils"

function Skeleton({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn("animate-pulse rounded-md bg-black_secondary", className)}
			{...props}
		/>
	)
}

export { Skeleton }
