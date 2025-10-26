"use client"

import FilterIcon from "@/public/filter"
import Input from "./input"
import { useState } from "react"
import Modal from "./modal"
import Select from "./select"

interface FilterPartProps {
	onSearchChange?: (value: string) => void
	placeholder?: string
	value?: string
}

function FilterPart({
	onSearchChange,
	placeholder = "Search",
	value = "",
}: FilterPartProps) {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [status, setStatus] = useState("")
	const [species, setSpecies] = useState("")
	const [gender, setGender] = useState("")

	const onChangeHandler = (value: string) => {
		onSearchChange?.(value)
	}

	return (
		<>
			<div className="col-span-full grid grid-cols-1 md:grid-cols-8 gap-2">
				<div className="col-span-1 md:col-span-7">
					<Input
						onChange={onChangeHandler}
						placeholder={placeholder}
						value={value}
					/>
				</div>

				<button
					onClick={() => setIsFilterOpen(true)}
					className="relative bg-primary-500  w-full h-full bg-[#F2F9FE] text-[#2196F3] p-2 rounded-md shadow-card-3 flex items-center justify-center cursor-pointer"
				>
					<FilterIcon className="absolute top-1/2 left-4 -translate-y-1/2 w-4 h-4 md:relative md:top-0 md:left-0 md:translate-y-0" />
					<p className="block md:hidden">Advanced Filters</p>
				</button>
			</div>
			<Modal
				open={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
				title="Filters"
			>
				<div className="flex flex-col gap-2">
					<Select
						options={["alive", "dead", "unknown"]}
						onChange={setStatus}
						value={status}
					/>
					<Select
						options={[
							"human",
							"alien",
							"robot",
							"animal",
							"unknown",
						]}
						onChange={setSpecies}
						value={species}
					/>
					<Select
						options={["female", "male", "genderless", "unknown"]}
						onChange={setGender}
						value={gender}
					/>

					<button
						onClick={() => setIsFilterOpen(false)}
						className="bg-[#E3F2FD] text-[#2196F3] px-4 py-2 rounded-md shadow-card-3 w-full"
					>
						Apply Filters
					</button>
				</div>
			</Modal>
		</>
	)
}

export default FilterPart
