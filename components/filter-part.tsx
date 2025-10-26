"use client"

import FilterIcon from "@/public/filter"
import Input from "./input"
import { useState } from "react"
import Modal from "./modal"

function FilterPart() {
	const [isFilterOpen, setIsFilterOpen] = useState(false)

	const onChangeHandler = (value: string) => {
		console.log(value)
	}

	return (
		<>
			<div className="col-span-full grid grid-cols-1 md:grid-cols-8 gap-2">
				<div className="col-span-1 md:col-span-7">
					<Input
						onChange={onChangeHandler}
						placeholder="Search characters"
					/>
				</div>

				<button
					onClick={() => setIsFilterOpen(true)}
					className="relative bg-primary-500  w-full h-full bg-[#F2F9FE] text-[#2196F3] p-2 rounded-md shadow-card-3 flex items-center justify-center"
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
				<p>Filter</p>
			</Modal>
		</>
	)
}

export default FilterPart
