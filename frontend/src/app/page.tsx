"use client"
import App from "./components"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function Home() {
	const queryClient = new QueryClient()
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</>
	)
}
