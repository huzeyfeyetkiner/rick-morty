"use client"

import CharacterCard from "./character-card"
import { useQuery } from "@tanstack/react-query"
import { getCharacterByUrl } from "@/api/client"

function Resident({ resident }: { resident: string }) {
	const { data: residentData, isLoading } = useQuery({
		queryKey: ["resident", resident],
		queryFn: () => getCharacterByUrl(resident),
	})

	if (isLoading) {
		return (
			<div className="w-full h-12 bg-gray-200 rounded-md animate-pulse" />
		)
	}

	return <CharacterCard character={residentData} />
}

export default Resident
