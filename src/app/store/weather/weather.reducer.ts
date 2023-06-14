import { createReducer, on, ActionReducer } from '@ngrx/store'
import defaultCity from '@shared/data/defaultCity'
import cities from '@shared/data/cities'
import { City } from '@shared/models/city.model'
import { selectCity, toggleFavorite } from './weather.actions'

export type WeatherState = {
    selectedCity: City | null
    favoriteCities: City[]
}

const weatherState = {
    selectedCity: defaultCity,
    favoriteCities: cities,
} as WeatherState

const weatherReducer: ActionReducer<WeatherState> = createReducer(
    weatherState,
    on(
        selectCity,
        (state, action): WeatherState => ({
            ...state,
            selectedCity: action.city,
        })
    ),
    on(
        toggleFavorite,
        (state, action): WeatherState => ({
            ...state,
            favoriteCities: state.favoriteCities.includes(action.city)
                ? state.favoriteCities.filter(
                      (city) => city.Key !== action.city.Key
                  )
                : [...state.favoriteCities, action.city],
        })
    )
)

export default weatherReducer
