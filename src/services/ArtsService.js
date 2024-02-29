import { AppState } from "../AppState"
import { Art } from "../models/Art"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


function _artResponse(response) {
    const newArt = response.data.artworks.map(artPOJO => new Art(artPOJO))
    AppState.art = newArt
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.total_pages
}

class ArtsService {

    async getArt() {
        const response = await api.get('api/artworks')
        logger.log('Response Data:', response.data)
        _artResponse(response)
    }

    async getArtById(artId) {
        const response = await api.get(`movie/${movieId}`)
        logger.log('Got Art By Id', response.data)
        const newArt = new Art(response.data)
        AppState.activeArt = newArt
    }

    async changePage(pageNumber) {
        const response = await api.get(`api/art?page=${pageNumber}`)
        logger.log('changing page', response.data)
        _artResponse(response)
    }
    async searchArt(searchQuery) {
        const response = await api.get(`api/art?query=!${searchQuery}`)
        logger.log('searching Art', response.data)
        AppState.searchQuery = searchQuery
        _artResponse(response)
    }
    async changePageWithSearchQuery(searchQuery, pageNumber) {
        logger.log(`Query: ${searchQuery}, page: ${pageNumber}`)

        const response = await api.get(`api/`)
    }
}

export const artsService = new ArtsService()