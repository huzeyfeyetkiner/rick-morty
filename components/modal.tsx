import CloseIcon from "@/public/close-icon"
import React from "react"

interface ModalProps {
	children: React.ReactNode
	onClose: () => void
	open: boolean
	title: string
}

function Modal({ children, onClose, open, title }: ModalProps) {
	if (!open) return null

	return (
		<div
			onClick={onClose}
			className="absolute top-0 left-0 w-full h-full bg-black/50 z-70 flex items-center justify-center"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-xs sm:w-sm h-fit mx-auto bg-white rounded-lg px-4 py-5 shadow-card-3"
			>
				<div className="flex items-center justify-between pb-4">
					<h2 className="text-2xl font-bold">{title}</h2>
					<button onClick={onClose} className="cursor-pointer">
						<CloseIcon />
					</button>
				</div>
				{children}
			</div>
		</div>
	)
}

export default Modal
