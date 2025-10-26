import { getCharacter } from "@/api/client"
import BackButton from "@/components/back-button"
import EpisodeCard from "@/components/episode-card"
import ScrollTop from "@/components/scroll-top"
import ChevronRight from "@/public/chevron-right"
import { Character } from "@/types/character"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

async function CharacterPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params

	try {
		const character = (await getCharacter(id as string)) as Character

		if (!character) {
			return notFound()
		}

		return (
			<div className="container mx-auto p-6 md:p-12">
				<BackButton />

				<div className="flex flex-col items-center gap-4">
					<Image
						className="object-cover border-5 border-gray-6 rounded-full"
						src={character.image}
						alt={character.name}
						width={146}
						height={146}
					/>
					<h1 className="text-2xl font-normal text-basic">
						{character.name}
					</h1>
				</div>

				<div className="max-w-96 md:max-w-200 flex flex-col items-start gap-3 mx-auto py-5">
					<h2 className="text-2xl font-bold text-[#8E8E93]">
						Informations
					</h2>
					<div className="px-2 divide-y divide-[#21212114] w-full space-y-3">
						<div className="flex flex-col items-start pb-2">
							<p className="text-xl text-[#081F32] font-bold">
								Gender
							</p>
							<p className="text-base text-[#6E798C] font-bold">
								{character?.gender}
							</p>
						</div>
						<div className="flex flex-col items-start pb-2">
							<p className="text-xl text-[#081F32] font-bold">
								Status
							</p>
							<p className="text-base text-[#6E798C] font-bold">
								{character?.status}
							</p>
						</div>
						<div className="flex flex-col items-start pb-2">
							<p className="text-xl text-[#081F32] font-bold">
								Specie
							</p>
							<p className="text-base text-[#6E798C] font-bold">
								{character?.species}
							</p>
						</div>
						<div className="flex flex-col items-start pb-2">
							<p className="text-xl text-[#081F32] font-bold">
								Origin
							</p>
							<p className="text-base text-[#6E798C] font-bold">
								{character?.origin.name}
							</p>
						</div>
						<Link
							href={`/location/${character?.location.url
								.split("/")
								.pop()}`}
							className="flex flex-row items-center justify-between pb-2"
						>
							<div className="flex flex-col items-start">
								<p className="text-xl text-[#081F32] font-bold">
									Location
								</p>
								<p className="text-base text-[#6E798C] font-bold">
									{character?.location.name}
								</p>
							</div>

							<div>
								<ChevronRight />
							</div>
						</Link>
					</div>
				</div>

				<div className="max-w-96 md:max-w-200 flex flex-col items-start gap-3 mx-auto py-5">
					<h2 className="text-2xl font-bold text-[#8E8E93]">
						Episodes
					</h2>
					<div className="px-2 divide-y divide-[#21212114] w-full space-y-3">
						{character.episode.map((episode) => (
							<EpisodeCard key={episode} episode={episode} />
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

export default CharacterPage
