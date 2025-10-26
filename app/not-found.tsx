import Link from "next/link"
import React from "react"

function NotFound() {
	return (
		<div className="flex flex-col items-center h-screen p-6 md:p-20 space-y-4">
			<h1 className="text-4xl font-bold text-center">Page Not Found</h1>
			<p className="text-lg text-center">
				The page you are looking for does not exist.
			</p>
			<Link href="/" className="text-blue-500 text-center">
				Go back to the home page
			</Link>
		</div>
	)
}

export default NotFound
