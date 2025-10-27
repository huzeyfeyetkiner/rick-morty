import { Episode } from "@/types/episode"
import Link from "next/link"

function EpisodeCard({ episode }: { episode: Episode }) {
	return (
		<Link
			href={`/episode/${episode.id}`}
			className="w-full bg-white rounded-sm shadow-card-3 flex flex-col items-center justify-center p-10"
		>
			<h2 className="text-lg text-[#000000DE] font-medium text-center">
				{episode?.name}
			</h2>
			<p className="text-sm text-[#00000099] font-medium text-center">
				{episode?.air_date}
			</p>
			<p className="text-sm text-[#00000099] font-medium text-center">
				{episode?.episode}
			</p>
		</Link>
	)
}

export default EpisodeCard
