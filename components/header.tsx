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
				<Link href="/" className="">
					<HeaderIcon />
				</Link>
				<div>
					<button
						onClick={() => setIsMenuOpen(isMenuOpen ? false : true)}
						className="cursor-pointer"
					>
						<HamburgerIcon />
					</button>
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
