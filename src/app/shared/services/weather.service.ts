import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, firstValueFrom } from 'rxjs'
import { Weather, weatherSchema } from '@shared/models/weather.model'
import { parseResponse } from '@shared/utils/parse-response.operator'
import { environment } from '@env/environment'
import citiesStub from '@shared/data/cities'
import { City, citySchema } from '@shared/models/city.model'

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

    getWeather(cityId: number): Observable<Weather> {
        return this.http
            .get<Weather>(
                'http://dataservice.accuweather.com/currentconditions/v1/' +
                    cityId,
                {
                    params: {
                        apikey: process.env['WEATHER_API_KEY'] as string,
                    },
                }
            )
            .pipe(parseResponse(weatherSchema))
    }
}
