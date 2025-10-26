"use client"

import { getCharacters } from "@/api/client"
import CharacterCard from "@/components/character-card"
import FilterPart from "@/components/filter-part"
import LoadMore from "@/components/load-more"
import { Character } from "@/types/character"
import Image from "next/image"
import { useInfiniteQuery } from "@tanstack/react-query"

export default function Home() {
	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		error,
	} = useInfiniteQuery({
		queryKey: ["characters"],
		queryFn: ({ pageParam = 1 }) => getCharacters(pageParam),
		getNextPageParam: (lastPage) => {
			return lastPage.info.next
				? lastPage.info.next.split("page=")[1]
				: undefined
		},
		initialPageParam: 1,
	})

	const allCharacters = data?.pages.flatMap((page) => page.results) ?? []

	const loadMoreCharacters = () => {
		if (hasNextPage && !isFetchingNextPage) {
			fetchNextPage()
		}
	}

	if (isLoading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<div className="text-lg">Loading...</div>
			</div>
		)
	}

	if (error) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<div className="text-lg text-red-500">
					Error loading characters
				</div>
			</div>
		)
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
			<FilterPart />
			{allCharacters.map((character: Character) => (
				<CharacterCard key={character.id} character={character} />
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
