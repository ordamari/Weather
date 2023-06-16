import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { firstValueFrom, map } from 'rxjs'
import { Weather, weatherSchema } from '@shared/models/weather.model'
import { environment } from '@env/environment'
import { City, citiesSchema, citySchema } from '@shared/models/city.model'
import { Forecast, forecastSchema } from '@shared/models/forecast.model'
import { ZodUtils } from '@core/utils/zod.utils'
import { Store } from '@ngrx/store'
import { selectMethod } from '@app/store/preferences/preferences.selectors'
import { Method } from '@shared/enums/method.enum'

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private BASE_URL = 'https://dataservice.accuweather.com/'
    constructor(
        private http: HttpClient,
        private zodUtils: ZodUtils,
        private store: Store
    ) {}
    public async getCities(query: string) {
        if (query.length <= 2) return Array<City>()
        const $res = this.http
            .get<City[]>(`${this.BASE_URL}locations/v1/cities/autocomplete`, {
                params: {
                    apikey: environment.WEATHER_API_KEY,
                    q: query,
                },
            })
            .pipe(this.zodUtils.parseResponse(citiesSchema))
        const cities = await firstValueFrom($res)
        return cities
    }

    public async getWeather(key: string) {
        const $res = this.http
            .get<Weather[]>(`${this.BASE_URL}currentconditions/v1/${key}`, {
                params: {
                    apikey: environment.WEATHER_API_KEY,
                },
            })
            .pipe(
                map((weathers: Weather[]) => weathers[0]),
                this.zodUtils.parseResponse(weatherSchema)
            )
        const weather = await firstValueFrom($res)
        return weather
    }

    public async getForecast(key: string) {
        const method$ = this.store.select(selectMethod)
        const method = await firstValueFrom(method$)
        const $res = this.http
            .get<Forecast>(`${this.BASE_URL}forecasts/v1/daily/5day/${key}`, {
                params: {
                    apikey: environment.WEATHER_API_KEY,
                    metric: method === Method.Metric ? 'true' : 'false',
                },
            })
            .pipe(this.zodUtils.parseResponse(forecastSchema))
        const forecast = await firstValueFrom($res)
        return forecast
    }

    public async getCityByGeolocation(lat: number, lon: number) {
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
            .pipe(this.zodUtils.parseResponse(citySchema))
        const city = await firstValueFrom($res)
        return city as unknown as City
    }
}
