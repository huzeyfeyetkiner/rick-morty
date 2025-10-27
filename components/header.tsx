"use client"

import HamburgerIcon from "@/public/hamburger"
import HeaderIcon from "@/public/header-icon"
import { useState, useTransition } from "react"
import Sheet from "./sheet"
import Link from "next/link"
import { useRouter } from "next/navigation"
import CloseIcon from "@/public/close-icon"

function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isPending, startTransition] = useTransition()

	const router = useRouter()

	const handleMenuClick = (path: string) => {
		startTransition(() => {
			router.push(path)
			setIsMenuOpen(false)
		})
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
							{isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
						</button>
					</div>
				</div>
			</div>

			<Sheet open={isMenuOpen} isPending={isPending}>
				<div className="flex flex-col gap-12 items-center justify-center">
					<button
						className="text-2xl font-bold"
						onClick={() => handleMenuClick("/")}
						disabled={isPending}
					>
						Characters
					</button>
					<button
						className="text-2xl font-bold"
						onClick={() => handleMenuClick("/location")}
						disabled={isPending}
					>
						Locations
					</button>
					<button
						className="text-2xl font-bold"
						onClick={() => handleMenuClick("/episode")}
						disabled={isPending}
					>
						Episodes
					</button>
				</div>
			</Sheet>
		</>
	)
}

export default Header
