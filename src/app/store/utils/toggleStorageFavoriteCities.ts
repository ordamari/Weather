import { City } from '@shared/models/city.model'
import getStorageFavoriteCities from './getStorageFavoriteCities'
import { FAVORITES_CITIES_KEY } from '../constants/favorites-cities.storage-key'

export default function (city: City) {
    const favoriteCities = getStorageFavoriteCities()
    const afterToggle = favoriteCities.some(
        (someCity) => someCity.Key === city.Key
    )
        ? favoriteCities.filter((someCity) => someCity.Key !== city.Key)
        : [...favoriteCities, city]
    localStorage.setItem(FAVORITES_CITIES_KEY, JSON.stringify(afterToggle))
}
