"use client"

import CharacterCard from "./character-card"
import { useQuery } from "@tanstack/react-query"
import { getCharacterByUrl } from "@/api/client"

function CharacterGet({ character }: { character: string }) {
	const { data: characterData, isLoading } = useQuery({
		queryKey: ["character-get", character],
		queryFn: () => getCharacterByUrl(character),
	})

	if (isLoading) {
		return (
			<div className="w-full h-12 bg-gray-200 rounded-md animate-pulse" />
		)
	}

	return <CharacterCard character={characterData} />
}

export default CharacterGet
