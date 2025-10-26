import React from "react"
import LoadingIcon from "@/public/loading"

function Loading() {
	return (
		<div className="flex justify-center min-h-screen ">
			<LoadingIcon className="animate-spin" />
		</div>
	)
}

export default Loading
