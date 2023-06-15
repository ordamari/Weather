import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, map } from 'rxjs'
import { Weather, weatherSchema } from '@shared/models/weather.model'
import { parseResponse } from '@shared/utils/parse-response.operator'
import { environment } from '@env/environment'
import citiesStub from '@shared/data/cities'
import weatherStub from '@shared/data/weather'
import forecastStub from '@shared/data/forecast'
import { City, citySchema } from '@shared/models/city.model'
import { Forecast, forecastSchema } from '@shared/models/forecast.model'

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private BASE_URL = 'http://dataservice.accuweather.com/'
    constructor(private http: HttpClient) {}

    public async getCities(query: string) {
        if (query.length <= 2) return []
        return citiesStub as City[]
        const $res = this.http
            .get<City[]>(`${this.BASE_URL}locations/v1/cities/autocomplete`, {
                params: {
                    apikey: environment.WEATHER_API_KEY,
                    q: query,
                },
            })
            .pipe(parseResponse(citySchema))
        const cities = await firstValueFrom($res)
        return cities
    }

    public async getWeather(key: string) {
        return weatherStub[0] as Weather
        const $res = this.http
            .get<Weather[]>(`${this.BASE_URL}currentconditions/v1/${key}`, {
                params: {
                    apikey: environment.WEATHER_API_KEY,
                },
            })
            .pipe(
                map((weathers: Weather[]) => weathers[0]),
                parseResponse(weatherSchema)
            )
        const weather = await firstValueFrom($res)
        return weather
    }

    public async getForecast(key: string) {
        return forecastStub as Forecast
        const $res = this.http
            .get<Forecast>(`${this.BASE_URL}forecasts/v1/daily/5day/${key}`, {
                params: {
                    apikey: environment.WEATHER_API_KEY,
                    metric: 'true',
                },
            })
            .pipe(parseResponse(forecastSchema))
        const forecast = await firstValueFrom($res)
        return forecast
    }

    public async getCityByGeolocation(lat: number, lon: number) {
        return citiesStub[0] as City
        const $res = this.http
            .get<Forecast>(
                `${this.BASE_URL}locations/v1/cities/geoposition/search`,
                {
                    params: {
                        apikey: environment.WEATHER_API_KEY,
                        q: `${lat},${lon}`,
                    },
                }
            )
            .pipe(parseResponse(citySchema))
        const city = await firstValueFrom($res)
        return city
    }
}
