"use client"

import { getLocations } from "@/api/client"
import LocationCard from "@/components/location-card"
import FilterPart from "@/components/filter-part"
import LoadMore from "@/components/load-more"
import Image from "next/image"
import { useInfiniteQuery } from "@tanstack/react-query"
import LoadingIcon from "@/public/loading"
import { Location } from "@/types/location"

export default function LocationPage() {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		error,
	} = useInfiniteQuery({
		queryKey: ["locations"],
		queryFn: ({ pageParam = 1 }) => getLocations(pageParam),
		getNextPageParam: (lastPage) => {
			return lastPage.info.next
				? lastPage.info.next.split("page=")[1]
				: undefined
		},
		initialPageParam: 1,
	})

	const allLocations = data?.pages.flatMap((page) => page.results) ?? []

	const loadMoreLocations = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage()
		}
	}

	if (isLoading) {
		return (
			<div className="flex justify-center min-h-screen ">
				<LoadingIcon className="animate-spin" />
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<div className="text-lg text-red-500">
					Error loading locations
				</div>
			</div>
		)
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
			<FilterPart />
			{allLocations.map((location: Location) => (
				<LocationCard key={location.id} location={location} />
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
