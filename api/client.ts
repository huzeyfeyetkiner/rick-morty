import axios from "axios"

const client = axios.create({
	baseURL: "https://rickandmortyapi.com/api",
})

export default client

export const getCharacters = async (page: number) => {
	try {
		const response = await client.get(`/character?page=${page}`)
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch characters")
	}
}

export const getCharacter = async (id: string) => {
	try {
		const response = await client.get(`/character/${id}`)
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch character")
	}
}

export const getEpisodes = async (page: number) => {
	try {
		const response = await client.get(`/episode?page=${page}`)
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch episodes")
	}
}

export const getEpisode = async (episode: string) => {
	try {
		const response = await axios.get(`${episode}`)
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch episode")
	}
}

export const getLocations = async (page: number) => {
	try {
		const response = await client.get(`/location?page=${page}`)
		return response.data
	} catch (error) {
		console.error(error)
		throw new Error("Failed to fetch locations")
	}
}

export const getLocation = async (id: string) => {
	const response = await client.get(`/location/${id}`)
	return response.data
}
