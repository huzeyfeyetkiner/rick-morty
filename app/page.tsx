import { getCharacters } from "@/api/client"
import CharacterCard from "@/components/character-card"
import FilterPart from "@/components/filter-part"
import Input from "@/components/input"
import { Character } from "@/types/character"
import Image from "next/image"

export default async function Home() {
	const characters = await getCharacters(1)
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
			{characters.results.map((character: Character) => (
				<CharacterCard key={character.id} character={character} />
			))}
		</div>
	)
}
