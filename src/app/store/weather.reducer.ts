import { createReducer } from '@ngrx/store'
import defaultCity from '@shared/data/defaultCity'
import { City } from '@shared/models/city.model'

export type WeatherState = {
    selectedCity: City | null
    favoriteCities: City[]
}

const weatherState = {
    selectedCity: defaultCity,
    favoriteCities: [],
} as WeatherState

export default createReducer(weatherState)
