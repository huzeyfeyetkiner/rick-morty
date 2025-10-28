import React, { useEffect } from "react"
import Loading from "./loading"

interface SheetProps {
	children: React.ReactNode
	open: boolean
	isPending?: boolean
}

function Sheet({ children, open, isPending }: SheetProps) {
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = "unset"
		}

		return () => {
			document.body.style.overflow = "unset"
		}
	}, [open])

	if (!open) return null

	return (
		<div className="fixed top-16 left-0 right-0 bottom-0 w-full h-[calc(100vh-4rem)] bg-white flex justify-center z-50 overflow-y-auto">
			<div className="w-full max-w-7xl p-4">
				{isPending ? (
					<div className="flex justify-center items-center min-h-[50vh]">
						<Loading />
					</div>
				) : (
					<div className="p-10">{children}</div>
				)}
			</div>
		</div>
	)
}

export default Sheet
