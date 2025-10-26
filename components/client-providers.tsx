"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

interface ClientProvidersProps {
	children: React.ReactNode
}

function ClientProviders({ children }: ClientProvidersProps) {
	const queryClient = new QueryClient()
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}

export default ClientProviders
