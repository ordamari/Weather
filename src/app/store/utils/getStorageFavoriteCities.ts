import { City, citySchema } from '@shared/models/city.model'
import { FAVORITES_CITIES_KEY } from '../constants/favorites-cities.storage-key'

export default function () {
    const storageFavoritesCites = localStorage.getItem(FAVORITES_CITIES_KEY)
    if (!storageFavoritesCites) return new Array<City>()
    const parsedStorageFavoritesCites = JSON.parse(storageFavoritesCites)
    if (!Array.isArray(parsedStorageFavoritesCites)) new Array<City>()
    const isArrayOfCities = parsedStorageFavoritesCites.every(
        (city: unknown) =>
            typeof city === 'object' && citySchema.safeParse(city).success
    )
    if (isArrayOfCities) return parsedStorageFavoritesCites as City[]
    return new Array<City>()
}
