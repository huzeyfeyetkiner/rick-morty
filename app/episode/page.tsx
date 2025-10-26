"use client"

import { getEpisodes } from "@/api/client"
import FilterPart from "@/components/filter-part"
import LoadMore from "@/components/load-more"
import Image from "next/image"
import { useInfiniteQuery } from "@tanstack/react-query"
import LoadingIcon from "@/public/loading"
import { Episode, EpisodeAPIResponse, EpisodeFilter } from "@/types/episode"
import EpisodeCard from "@/components/episode-card"
import { useSearch } from "@/hooks/use-search"

export default function EpisodePage() {
	const { searchTerm, filters, updateSearchTerm } = useSearch()

	const {
		data,
		fetchNextPage,
		hasNextPage,
		isFetchingNextPage,
		isLoading,
		error,
	} = useInfiniteQuery({
		queryKey: ["episodes", filters],
		queryFn: ({ pageParam = 1 }) =>
			getEpisodes(Number(pageParam), filters as EpisodeFilter),
		getNextPageParam: (lastPage: EpisodeAPIResponse) => {
			return lastPage.info.next
				? lastPage.info.next.split("page=")[1]
				: undefined
		},
		initialPageParam: "1",
		retry: 1,
	})

	const allEpisodes =
		data?.pages.flatMap((page: EpisodeAPIResponse) => page.results) ?? []

	const loadMoreEpisodes = () => {
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
				placeholder="Search episodes"
				value={searchTerm}
			/>

			{isLoading && !error && (
				<div className="col-span-full flex justify-center items-center py-4">
					<LoadingIcon className="animate-spin w-24 h-24" />
				</div>
			)}

			{!isLoading && allEpisodes?.length === 0 && searchTerm && (
				<div className="col-span-full flex justify-center items-center py-8">
					<div className="text-lg text-gray-500">
						No episodes found
					</div>
				</div>
			)}

			{!error &&
				allEpisodes &&
				allEpisodes.length > 0 &&
				allEpisodes.map((episode: Episode) => (
					<EpisodeCard key={episode.id} episode={episode.url} />
				))}

			{hasNextPage && (
				<div className="col-span-full flex justify-center items-center">
					<LoadMore
						onClick={loadMoreEpisodes}
						loading={isFetchingNextPage}
					/>
				</div>
			)}
		</div>
	)
}
