import React from "react"

interface SelectProps {
	options: string[]
	onChange: (value: string) => void
	value: string
	placeholder?: string
}

function Select({ options, onChange, value, placeholder }: SelectProps) {
	return (
		<div className="w-full relative border border-[#00000061] rounded-lg active:border-primary-500 outline-none ring-0 focus:ring-0 focus:outline-none ">
			<select
				className="w-full h-14 px-2 py-2 rounded-md border border-gray-300 outline-none ring-0 focus:ring-0 focus:outline-none"
				onChange={(e) => onChange(e.target.value)}
				value={value}
			>
				{placeholder && (
					<option value="" disabled>
						{placeholder}
					</option>
				)}
				{options.map((option) => (
					<option
						className="text-black text-sm font-medium"
						key={option}
						value={option}
					>
						{option}
					</option>
				))}
			</select>
		</div>
	)
}

export default Select
