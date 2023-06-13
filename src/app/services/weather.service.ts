import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { City } from '../common/types/city.type';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private BASE_URL = 'http://dataservice.accuweather.com/';
  constructor(private http: HttpClient) {}

  public async getCities(query: string) {
    if (query.length <= 2) return [];
    const $res = await this.http.get<any>(
      `${this.BASE_URL}locations/v1/cities/search`,
      {
        params: {
          apikey: process.env['WEATHER_API_KEY'] as string,
          q: query,
        },
      }
    );
    const cities = await firstValueFrom($res);
    console.log(cities);
    return cities as City[];
  }
}
