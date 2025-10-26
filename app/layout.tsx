import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import ClientProviders from "@/components/client-providers"

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
})

export const metadata: Metadata = {
	title: "Rick and Morty",
	description: "Rick and Morty characters",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.className} antialiased bg-white`}>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	)
}
