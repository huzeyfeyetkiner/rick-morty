import { useState, useMemo } from "react"
import { useDebounce } from "./use-debounce"

export type SearchType = "characters" | "episodes" | "locations"

export interface SearchFilters {
	name?: string
	status?: string
	species?: string
	type?: string
	gender?: string
	dimension?: string
	episode?: string
}

export function useSearch() {
	const [searchTerm, setSearchTerm] = useState("")
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const filters = useMemo(() => {
		return debouncedSearchTerm ? { name: debouncedSearchTerm } : {}
	}, [debouncedSearchTerm])

	const updateSearchTerm = (term: string) => {
		setSearchTerm(term)
	}

	const updateFilters = (newFilters: Partial<SearchFilters>) => {
		console.log("Advanced filters:", newFilters)
	}

	const clearFilters = () => {
		setSearchTerm("")
	}

	return {
		searchTerm,
		filters,
		updateSearchTerm,
		updateFilters,
		clearFilters,
	}
}
