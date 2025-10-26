"use client"

import FilterIcon from "@/public/filter"
import Input from "./input"
import { useState } from "react"
import Modal from "./modal"
import Select from "./select"
import { SearchFilters } from "@/hooks/use-search"

interface FilterPartProps {
	onSearchChange?: (value: string) => void
	onFiltersChange?: (filters: Partial<SearchFilters>) => void
	placeholder?: string
	value?: string
	filterType?: "characters" | "locations" | "episodes"
}

function FilterPart({
	onSearchChange,
	onFiltersChange,
	placeholder = "Search",
	value = "",
	filterType = "characters",
}: FilterPartProps) {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const [status, setStatus] = useState("")
	const [species, setSpecies] = useState("")
	const [gender, setGender] = useState("")
	const [type, setType] = useState("")
	const [dimension, setDimension] = useState("")

	const onChangeHandler = (value: string) => {
		onSearchChange?.(value)
	}

	const applyFilters = () => {
		const filters: Partial<SearchFilters> = {}

		if (filterType === "characters") {
			if (status) filters.status = status
			if (species) filters.species = species
			if (gender) filters.gender = gender
		} else if (filterType === "locations") {
			if (type) filters.type = type
			if (dimension) filters.dimension = dimension
		}

		onFiltersChange?.(filters)
		setIsFilterOpen(false)
	}

	return (
		<>
			<div className="col-span-full grid grid-cols-1 md:grid-cols-8 gap-2">
				<div
					className={`col-span-1 ${
						filterType !== "episodes"
							? "md:col-span-7"
							: "md:col-span-8"
					}`}
				>
					<Input
						onChange={onChangeHandler}
						placeholder={placeholder}
						value={value}
					/>
				</div>

				{filterType !== "episodes" && (
					<button
						onClick={() => setIsFilterOpen(true)}
						className="relative bg-primary-500  w-full h-full bg-[#F2F9FE] text-[#2196F3] p-2 rounded-md shadow-card-3 flex items-center justify-center cursor-pointer"
					>
						<FilterIcon className="absolute top-1/2 left-4 -translate-y-1/2 w-4 h-4 md:relative md:top-0 md:left-0 md:translate-y-0" />
						<p className="block md:hidden">Advanced Filters</p>
					</button>
				)}
			</div>
			<Modal
				open={isFilterOpen}
				onClose={() => setIsFilterOpen(false)}
				title="Filters"
			>
				<div className="flex flex-col gap-2">
					{filterType === "characters" && (
						<>
							<Select
								options={["alive", "dead", "unknown"]}
								onChange={setStatus}
								value={status}
								placeholder="Status"
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
								placeholder="Species"
							/>
							<Select
								options={[
									"female",
									"male",
									"genderless",
									"unknown",
								]}
								onChange={setGender}
								value={gender}
								placeholder="Gender"
							/>
						</>
					)}

					{filterType === "locations" && (
						<>
							<Select
								options={[
									"planet",
									"space station",
									"spacecraft",
									"unknown",
								]}
								onChange={setType}
								value={type}
								placeholder="Type"
							/>
							<Select
								options={[
									"Dimension C-137",
									"Dimension C-35",
									"unknown",
								]}
								onChange={setDimension}
								value={dimension}
								placeholder="Dimension"
							/>
						</>
					)}

					<button
						onClick={applyFilters}
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
