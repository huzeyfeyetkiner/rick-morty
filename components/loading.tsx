import React from "react"
import LoadingIcon from "@/public/loading"

function Loading() {
	return (
		<div className="flex w-full justify-center items-center">
			<LoadingIcon className="animate-spin w-52 h-52" />
		</div>
	)
}

export default Loading
