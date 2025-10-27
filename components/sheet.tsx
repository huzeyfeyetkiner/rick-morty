import React from "react"
import Loading from "./loading"

interface SheetProps {
	children: React.ReactNode
	open: boolean
	isPending?: boolean
}

function Sheet({ children, open, isPending }: SheetProps) {
	if (!open) return null

	return (
		<div className="absolute top-16 left-0 w-full h-full bg-white flex justify-center z-50 p-4">
			{isPending ? <Loading /> : <div className="p-10">{children}</div>}
		</div>
	)
}

export default Sheet
