import React from "react"

interface SheetProps {
	children: React.ReactNode
	open: boolean
	onClose: () => void
}

function Sheet({ children, open, onClose }: SheetProps) {
	if (!open) return null

	return (
		<div className="absolute top-16 left-0 w-full h-full bg-white flex justify-center z-50 p-20">
			<div>{children}</div>
		</div>
	)
}

export default Sheet
