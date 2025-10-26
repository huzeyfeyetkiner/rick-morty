export interface Character {
	id: number
	name: string
	status: "Alive" | "Dead" | "unknown"
	species: string
	type: string
	gender: "Male" | "Female" | "Genderless" | "unknown"
	origin: {
		name: string
		url: string
	}
	location: {
		name: string
		url: string
	}
	image: string
	episode: string[]
	url: string
	created: string
}

export interface CharacterFilter {
	name?: string
	status?: "alive" | "dead" | "unknown"
	species?: string
	type?: string
	gender?: "female" | "male" | "genderless" | "unknown"
}

export interface CharacterAPIResponse {
	info: {
		count: number
		pages: number
		next: string | null
		prev: string | null
	}
	results: Character[]
}
