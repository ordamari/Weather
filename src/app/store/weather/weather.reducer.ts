import { createReducer, on, ActionReducer } from '@ngrx/store'
import { selectCity, toggleFavorite } from './weather.actions'
import initialState, { WeatherState } from './weather.state'

const weatherState = initialState

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
