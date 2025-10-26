export interface Episode {
	id: number
	name: string
	air_date: string
	episode: string // örnek: "S01E01"
	characters: string[]
	url: string
	created: string
}

export interface EpisodeFilter {
	name?: string
	episode?: string // örnek: "S01E01"
}

export interface EpisodeAPIResponse {
	info: {
		count: number
		pages: number
		next: string | null
		prev: string | null
	}
	results: Episode[]
}
