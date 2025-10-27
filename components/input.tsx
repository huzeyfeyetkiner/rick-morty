"use client"

import SearchIcon from "@/public/search"
interface InputProps {
	onChange: (value: string) => void
	placeholder: string
	value?: string
}

function Input({ onChange, placeholder, value = "" }: InputProps) {
	return (
		<div className="w-full relative border border-gray rounded-lg active:border-primary-500 outline-none ring-0 focus:ring-0 focus:outline-none ">
			<SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4" />

			<input
				type="text"
				className="w-full p-2 pl-8 rounded-md border border-gray-300 outline-none ring-0 focus:ring-0 focus:outline-none"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChange(e?.target?.value || "")}
			/>
		</div>
	)
}

export default Input
