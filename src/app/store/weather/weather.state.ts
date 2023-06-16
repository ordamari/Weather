import { City, citySchema } from '@shared/models/city.model'
import defaultCity from '@shared/data/defaultCity'
import cities from '@shared/data/cities'
import { FAVORITES_CITIES_KEY } from '../constants/favorites-cities.storage-key'

export type WeatherState = {
    selectedCity: City | null
    favoriteCities: City[]
}

function getFavoritesCites() {
    const storageFavoritesCites = localStorage.getItem(FAVORITES_CITIES_KEY)
    if (!storageFavoritesCites) return []
    const parsedStorageFavoritesCites = JSON.parse(storageFavoritesCites)
    if (!Array.isArray(parsedStorageFavoritesCites)) return []
    if (
        parsedStorageFavoritesCites.every(
            (city: unknown) =>
                typeof city === 'object' && citySchema.safeParse(city).success
        )
    ) {
        return parsedStorageFavoritesCites as City[]
    }
    return []
}

export default {
    selectedCity: defaultCity,
    favoriteCities: getFavoritesCites(),
} as WeatherState
