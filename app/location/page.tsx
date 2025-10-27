"use client"

import { getLocations } from "@/api/client"
import LocationCard from "@/components/location-card"
import FilterPart from "@/components/filter-part"
import LoadMore from "@/components/load-more"
import Image from "next/image"
import { useInfiniteQuery } from "@tanstack/react-query"
import LoadingIcon from "@/public/loading"
import { Location, LocationAPIResponse, LocationFilter } from "@/types/location"
import { useSearch } from "@/hooks/use-search"

export default function LocationPage() {
	const { searchTerm, filters, updateSearchTerm, updateFilters } = useSearch()

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		error,
	} = useInfiniteQuery({
		queryKey: ["locations", filters],
		queryFn: ({ pageParam = 1 }) =>
			getLocations(Number(pageParam), filters as LocationFilter),
		getNextPageParam: (lastPage: LocationAPIResponse) => {
			if (!lastPage?.info?.next) return undefined
			const url = new URL(lastPage.info.next)
			return url.searchParams.get("page")
		},
		initialPageParam: "1",
		retry: 1,
	})

	const allLocations =
		data?.pages.flatMap((page: LocationAPIResponse) => page.results) ?? []

	const loadMoreLocations = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage()
		}
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 container mx-auto p-6 md:p-12">
			<div className="col-span-full flex justify-center items-center">
				<div className="w-2/3 md:w-1/3 h-32 md:h-32 relative">
					<Image
						src="/location-header.svg"
						alt="logo"
						fill
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
			<FilterPart
				onSearchChange={updateSearchTerm}
				onFiltersChange={updateFilters}
				placeholder="Search locations"
				value={searchTerm}
				filterType="locations"
			/>

			{isLoading && !error && (
				<div className="col-span-full flex justify-center items-center py-4">
					<LoadingIcon className="animate-spin w-24 h-24" />
				</div>
			)}

			{!isLoading && allLocations?.length === 0 && searchTerm && (
				<div className="col-span-full flex justify-center items-center py-8">
					<div className="text-lg text-gray-500">
						No locations found
					</div>
				</div>
			)}

			{!error &&
				allLocations &&
				allLocations?.length > 0 &&
				allLocations?.map((location: Location, index: number) => (
					<LocationCard
						key={`${location?.id}-${location?.name}-${index}`}
						location={location}
					/>
				))}

			{hasNextPage && (
				<div className="col-span-full flex justify-center items-center">
					<LoadMore
						onClick={loadMoreLocations}
						loading={isFetchingNextPage}
					/>
				</div>
			)}
		</div>
	)
}
