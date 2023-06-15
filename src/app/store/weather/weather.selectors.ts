import { createFeatureSelector, createSelector } from '@ngrx/store'
import { WeatherState } from './weather.reducer'

export const selectWeatherState = createFeatureSelector<WeatherState>('weather')

export const selectSelectedCity = createSelector(
    selectWeatherState,
    (weatherState: WeatherState) => weatherState.selectedCity
)

export const selectFavoriteCities = createSelector(
    selectWeatherState,
    (weatherState: WeatherState) => weatherState.favoriteCities
)
