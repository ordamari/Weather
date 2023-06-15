import preferencesReducer, {
    PreferencesState,
} from './preferences/preferences.reducer'
import weatherReducer, { WeatherState } from './weather/weather.reducer'

export default {
    weather: weatherReducer,
    preferences: preferencesReducer,
}

export type RootState = {
    weather: WeatherState
    preferences: PreferencesState
}
