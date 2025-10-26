"use client"

import { useRouter } from "next/navigation"
function BackButton() {
	const router = useRouter()
	return (
		<button
			className="w-full max-w-96 mx-auto flex items-center gap-2 pb-2"
			onClick={() => router.back()}
		>
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
					fill="black"
				/>
			</svg>
			<p className="text-xl font-bold">Go Back</p>
		</button>
	)
}

export default BackButton
