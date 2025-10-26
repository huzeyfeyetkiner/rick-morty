import { getCharacter, getLocation } from "@/api/client"
import BackButton from "@/components/back-button"
import EpisodeCard from "@/components/episode-card"
import Resident from "@/components/resident"
import ScrollTop from "@/components/scroll-top"
import { Character } from "@/types/character"
import { Location } from "@/types/location"
import Image from "next/image"
import { notFound } from "next/navigation"

async function LocationPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params

	try {
		const location = (await getLocation(id as string)) as Location

		if (!location) {
			return notFound()
		}

		return (
			<div className="container mx-auto p-6 md:p-12">
				<BackButton />

				<div className="flex flex-col items-center gap-4">
					<h1 className="text-2xl font-normal text-[#081F32]">
						{location?.name}
					</h1>
				</div>

				<div className="max-w-96 grid grid-cols-2 gap-3 mx-auto py-5">
					<div>
						<p className="text-xl text-[#081F32] font-bold">Type</p>
						<p className="text-xl text-[#6E798C] font-bold">
							{location?.type}
						</p>
					</div>
					<div>
						<p className="text-xl text-[#081F32] font-bold">
							Dimension
						</p>
						<p className="text-xl text-[#6E798C] font-bold">
							{location?.dimension}
						</p>
					</div>
				</div>

				<div className="max-w-200 mx-auto py-5">
					<h2 className="text-2xl font-bold text-[#8E8E93]">
						Residents
					</h2>
					<div className="grid  md:grid-cols-2 gap-3">
						{location?.residents.map((resident) => (
							<Resident key={resident} resident={resident} />
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

export default LocationPage
