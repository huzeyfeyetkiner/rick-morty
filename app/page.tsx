"use client"

import { getCharacters } from "@/api/client"
import CharacterCard from "@/components/character-card"
import FilterPart from "@/components/filter-part"
import LoadMore from "@/components/load-more"
import {
	Character,
	CharacterAPIResponse,
	CharacterFilter,
} from "@/types/character"
import Image from "next/image"
import { useInfiniteQuery } from "@tanstack/react-query"
import LoadingIcon from "@/public/loading"
import { useSearch } from "@/hooks/use-search"
import Loading from "@/components/loading"

export default function Home() {
	const { searchTerm, filters, updateSearchTerm, updateFilters } = useSearch()

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		error,
	} = useInfiniteQuery({
		queryKey: ["characters", filters],
		queryFn: ({ pageParam = 1 }) =>
			getCharacters(Number(pageParam), filters as CharacterFilter),
		getNextPageParam: (lastPage: CharacterAPIResponse) => {
			if (!lastPage?.info?.next) return undefined
			const url = new URL(lastPage.info.next)
			return url.searchParams.get("page")
		},
		initialPageParam: "1",
		retry: 1,
	})

	const allCharacters =
		data?.pages.flatMap((page: CharacterAPIResponse) => page.results) ?? []

	const loadMoreCharacters = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage()
		}
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 container mx-auto p-6 md:p-12">
			<div className="col-span-full flex justify-center items-center">
				<div className="w-2/3 md:w-1/3 h-32 md:h-32 relative">
					<Image
						src="/rick-morty.svg"
						alt="logo"
						fill
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
			<FilterPart
				onSearchChange={updateSearchTerm}
				onFiltersChange={updateFilters}
				placeholder="Search characters"
				value={searchTerm}
				filterType="characters"
			/>

			{isLoading && !error && <Loading />}

			{!isLoading && allCharacters?.length === 0 && searchTerm && (
				<div className="col-span-full flex justify-center items-center py-8">
					<div className="text-lg text-gray-500">
						No characters found
					</div>
				</div>
			)}

			{!error &&
				allCharacters &&
				allCharacters?.length > 0 &&
				allCharacters?.map((character: Character, index: number) => (
					<CharacterCard
						key={`${character?.id}-${character?.name}-${index}`}
						character={character}
					/>
				))}

			{hasNextPage && (
				<div className="col-span-full flex justify-center items-center">
					<LoadMore
						onClick={loadMoreCharacters}
						loading={isFetchingNextPage}
					/>
				</div>
			)}
		</div>
	)
}
