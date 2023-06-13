import { createReducer } from '@ngrx/store'
import { City } from '@shared/models/city.model'

export type InitialState = {
    selectedCity: City | null
    favoriteCities: City[]
}

const initialState = {
    selectedCity: null,
    favoriteCities: [],
} as InitialState

export default createReducer(initialState)
