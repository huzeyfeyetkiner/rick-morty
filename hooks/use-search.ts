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
	const [advancedFilters, setAdvancedFilters] = useState<
		Partial<SearchFilters>
	>({})
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const filters = useMemo(() => {
		const baseFilters = debouncedSearchTerm
			? { name: debouncedSearchTerm }
			: {}
		return { ...baseFilters, ...advancedFilters }
	}, [debouncedSearchTerm, advancedFilters])

	const updateSearchTerm = (term: string) => {
		setSearchTerm(term)
	}

	const updateFilters = (newFilters: Partial<SearchFilters>) => {
		setAdvancedFilters((prev) => ({ ...prev, ...newFilters }))
	}

	const clearFilters = () => {
		setSearchTerm("")
		setAdvancedFilters({})
	}

	return {
		searchTerm,
		filters,
		updateSearchTerm,
		updateFilters,
		clearFilters,
	}
}
