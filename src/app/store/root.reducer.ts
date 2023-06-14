import weatherReducer, { WeatherState } from './weather/weather.reducer'

export default {
    weather: weatherReducer,
}

export type RootState = {
    weather: WeatherState
}
