import { Character } from "@/types/character"
import Image from "next/image"
import Link from "next/link"

interface CharacterCardProps {
	character: Character
}

function CharacterCard({ character }: CharacterCardProps) {
	return (
		<Link
			href={`/character/${character?.id}`}
			className="w-full bg-white rounded-sm shadow-card-3"
		>
			<div className="w-full h-80 relative ">
				<Image
					src={character?.image || "/default-character.png"}
					alt={character?.name || "Default Character"}
					fill
					className="w-full h-full object-cover"
				/>
			</div>
			<div className="p-4">
				<h2 className="text-lg text-[#000000DE] font-medium">
					{character?.name || "Default Character"}
				</h2>
				<p className="text-sm text-[#00000099] font-medium">
					{character?.species || "Default Species"}
				</p>
			</div>
		</Link>
	)
}

export default CharacterCard
