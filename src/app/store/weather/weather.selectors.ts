import { RootState } from '../root.reducer'

export const selectedCitySelector = (state: RootState) =>
    state.weather.selectedCity
