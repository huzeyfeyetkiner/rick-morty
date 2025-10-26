import axios from "axios"
import { CharacterFilter, CharacterAPIResponse } from "@/types/character"
import { EpisodeFilter, EpisodeAPIResponse } from "@/types/episode"
import { LocationFilter, LocationAPIResponse } from "@/types/location"

const client = axios.create({
	baseURL: "https://rickandmortyapi.com/api",
})

export default client

export const getCharacters = async (
	page: number,
	filters?: Partial<CharacterFilter>
): Promise<CharacterAPIResponse> => {
	try {
		const params = new URLSearchParams({ page: page.toString() })

		if (filters) {
			Object.entries(filters).forEach(([key, value]) => {
				if (value) {
					params.append(key, value)
				}
			})
		}

		const response = await client.get(`/character?${params.toString()}`)
		return response.data
	} catch (error) {
		console.error("Error fetching characters:", error)
		throw new Error("Failed to fetch characters")
	}
}

export const getCharacter = async (id: string) => {
	try {
		const response = await client.get(`/character/${id}`)
		return response.data
	} catch (error) {
		return error
	}
}

export const getCharacterByUrl = async (url: string) => {
	try {
		const response = await client.get(url)
		return response.data
	} catch (error) {
		return error
	}
}

export const getEpisodes = async (
	page: number,
	filters?: Partial<EpisodeFilter>
): Promise<EpisodeAPIResponse> => {
	try {
		const params = new URLSearchParams({ page: page.toString() })

		if (filters) {
			Object.entries(filters).forEach(([key, value]) => {
				if (value) {
					params.append(key, value)
				}
			})
		}

		const response = await client.get(`/episode?${params.toString()}`)
		return response.data
	} catch (error) {
		console.error("Error fetching episodes:", error)
		throw new Error("Failed to fetch episodes")
	}
}

export const getEpisode = async (id: string) => {
	try {
		const response = await client.get(`/episode/${id}`)
		return response.data
	} catch (error) {
		return error
	}
}
export const getEpisodeByUrl = async (episode: string) => {
	try {
		const response = await axios.get(`${episode}`)
		return response.data
	} catch (error) {
		return error
	}
}

export const getLocations = async (
	page: number,
	filters?: Partial<LocationFilter>
): Promise<LocationAPIResponse> => {
	try {
		const params = new URLSearchParams({ page: page.toString() })

		if (filters) {
			Object.entries(filters).forEach(([key, value]) => {
				if (value) {
					params.append(key, value)
				}
			})
		}

		const response = await client.get(`/location?${params.toString()}`)
		return response.data
	} catch (error) {
		console.error("Error fetching locations:", error)
		throw new Error("Failed to fetch locations")
	}
}

export const getLocation = async (id: string) => {
	try {
		const response = await client.get(`/location/${id}`)
		return response.data
	} catch (error) {
		return error
	}
}
