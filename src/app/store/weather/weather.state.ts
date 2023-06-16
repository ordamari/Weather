import { City } from '@shared/models/city.model'
import defaultCity from '@shared/data/defaultCity'
import getStorageFavoriteCities from '../utils/getStorageFavoriteCities'

export type WeatherState = {
    selectedCity: City | null
    favoriteCities: City[]
}

export default {
    selectedCity: defaultCity,
    favoriteCities: getStorageFavoriteCities(),
} as WeatherState
