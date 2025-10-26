"use client"

import { getEpisode } from "@/api/client"
import ChevronRight from "@/public/chevron-right"
import { Episode } from "@/types/episode"

import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

function EpisodeCard({ episode }: { episode: string }) {
	const { data: episodeData, isLoading } = useQuery({
		queryKey: ["episode", episode],
		queryFn: () => getEpisode(episode),
	})

	if (isLoading) {
		return (
			<div className="w-full h-12 bg-gray-200 rounded-md animate-pulse" />
		)
	}

	return (
		<Link
			href={`/episode/${episodeData?.id}`}
			className="flex items-center justify-between"
		>
			<div>
				<h3 className="text-lg text-[#000000DE] font-medium">
					{episodeData?.episode}
				</h3>
				<p className="text-sm text-[#00000099] font-medium">
					{episodeData?.name}
				</p>
				<p className="text-sm text-[#00000099] font-medium">
					{episodeData?.air_date}
				</p>
			</div>

			<div>
				<ChevronRight />
			</div>
		</Link>
	)
}

export default EpisodeCard
