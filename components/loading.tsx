import React from "react"
import LoadingIcon from "@/public/loading"

function Loading() {
	return (
		<div className="flex justify-center">
			<LoadingIcon className="animate-spin w-52 h-52" />
		</div>
	)
}

export default Loading
