"use client"
import HamburgerIcon from "@/public/hamburger"
import HeaderIcon from "@/public/header-icon"
import { useState } from "react"
import Sheet from "./sheet"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const router = useRouter()

	const handleMenuClick = (path: string) => {
		setIsMenuOpen(false)
		router.push(path)
	}

	return (
		<>
			<div className="w-full h-16 bg-white shadow-card-3 flex items-center justify-between px-6 relative z-60">
				<div className="container mx-auto flex items-center justify-between gap-12">
					<Link href="/" className="">
						<HeaderIcon />
					</Link>
					<div className="hidden md:block">
						<div className="flex items-center gap-12">
							<Link href="/" className="text-2xl font-bold">
								Characters
							</Link>
							<Link
								href="/location"
								className="text-2xl font-bold"
							>
								Locations
							</Link>
							<Link
								href="/episode"
								className="text-2xl font-bold"
							>
								Episodes
							</Link>
						</div>
					</div>
					<div className="md:hidden">
						<button
							onClick={() =>
								setIsMenuOpen(isMenuOpen ? false : true)
							}
							className="cursor-pointer md:hidden"
						>
							<HamburgerIcon />
						</button>
					</div>
				</div>
			</div>

			<Sheet open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
				<div className="flex flex-col gap-2 items-center justify-center">
					<button
						className="text-2xl font-bold"
						onClick={() => handleMenuClick("/")}
					>
						Characters
					</button>
					<button
						className="text-2xl font-bold"
						onClick={() => handleMenuClick("/location")}
					>
						Locations
					</button>
					<button
						className="text-2xl font-bold"
						onClick={() => handleMenuClick("/episode")}
					>
						Episodes
					</button>
				</div>
			</Sheet>
		</>
	)
}

export default Header
