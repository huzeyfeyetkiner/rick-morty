import React from "react"

interface LoadMoreProps {
	onClick: () => void
	loading?: boolean
}

function LoadMore({ onClick, loading = false }: LoadMoreProps) {
	return (
		<button
			onClick={onClick}
			disabled={loading}
			className="w-full max-w-40 bg-[#F2F9FE] text-[#2196F3] p-2 rounded-md shadow-card-3 disabled:opacity-50"
		>
			{loading ? "LOADING..." : "LOAD MORE"}
		</button>
	)
}

export default LoadMore
