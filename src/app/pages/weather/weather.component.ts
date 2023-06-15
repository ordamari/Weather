import { Component, OnDestroy, OnInit } from '@angular/core'
import { selectCity, toggleFavorite } from '@app/store/weather/weather.actions'
import { Store } from '@ngrx/store'
import { City } from '@shared/models/city.model'
import { Forecast } from '@shared/models/forecast.model'
import { Weather } from '@shared/models/weather.model'
import { WeatherService } from '@core/services/weather/weather.service'
import { Observable, Subscription, tap } from 'rxjs'
import {
    selectFavoriteCities,
    selectSelectedCity,
} from '@store/weather/weather.selectors'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
    constructor(private store: Store, private weatherService: WeatherService) {}

    weather: Weather | null = null
    forecast: Forecast | null = null
    subscription: Subscription | null = null

    selectedCity$: Observable<City | null> =
        this.store.select(selectSelectedCity)
    favoriteCities$: Observable<City[]> =
        this.store.select(selectFavoriteCities)

    async onCityChange(city: City | null) {
        if (!city) return
        const [weather, forecast] = await Promise.all([
            await this.weatherService.getWeather(city.Key),
            await this.weatherService.getForecast(city.Key),
        ])
        this.weather = weather
        this.forecast = forecast
    }

    onToggleFavorite(city: City | null) {
        if (!city) return
        this.store.dispatch(toggleFavorite({ city }))
    }

    onSetCity(city: City) {
        this.store.dispatch(selectCity({ city }))
    }

    ngOnInit(): void {
        this.subscription = this.selectedCity$
            .pipe(tap(this.onCityChange.bind(this)))
            .subscribe()
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe()
    }
}
