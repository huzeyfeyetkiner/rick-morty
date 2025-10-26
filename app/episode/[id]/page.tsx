import { getEpisode } from "@/api/client"
import BackButton from "@/components/back-button"
import CharacterGet from "@/components/character-get"
import ScrollTop from "@/components/scroll-top"
import { Episode } from "@/types/episode"
import { notFound } from "next/navigation"

async function EpisodePage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params

	try {
		const episode = (await getEpisode(id as string)) as Episode

		if (!episode) {
			console.log(episode + "not found")
			return notFound()
		}

		return (
			<div className="container mx-auto p-6 md:p-12">
				<BackButton />

				<div className="md:max-w-200 mx-auto flex flex-col items-center md:items-start gap-4 ">
					<h1 className="text-2xl font-normal text-[#081F32]">
						{episode?.name}
					</h1>
				</div>

				<div className="max-w-96 md:max-w-200 grid grid-cols-2 gap-3 mx-auto py-5">
					<div>
						<p className="text-xl text-[#081F32] font-bold">
							Episode
						</p>
						<p className="text-xl text-[#6E798C] font-bold">
							{episode?.episode}
						</p>
					</div>
					<div>
						<p className="text-xl text-[#081F32] font-bold">Date</p>
						<p className="text-xl text-[#6E798C] font-bold">
							{episode?.air_date}
						</p>
					</div>
				</div>

				<div className="max-w-200 mx-auto py-5">
					<h2 className="text-2xl font-bold text-[#8E8E93]">Cast</h2>
					<div className="grid  md:grid-cols-2 gap-3">
						{episode?.characters.map((character) => (
							<CharacterGet
								key={character}
								character={character}
							/>
						))}
					</div>
				</div>

				<ScrollTop />
			</div>
		)
	} catch {
		return notFound()
	}
}

export default EpisodePage
