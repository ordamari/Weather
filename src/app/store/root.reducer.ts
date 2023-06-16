import preferencesReducer from './preferences/preferences.reducer'
import { PreferencesState } from './preferences/preferences.state'
import weatherReducer from './weather/weather.reducer'
import { WeatherState } from './weather/weather.state'

export default {
    weather: weatherReducer,
    preferences: preferencesReducer,
}

export type RootState = {
    weather: WeatherState
    preferences: PreferencesState
}
