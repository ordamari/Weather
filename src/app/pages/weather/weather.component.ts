import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { City } from '@shared/models/city.model'
import { Forecast } from '@shared/models/forecast.model'
import { Weather } from '@shared/models/weather.model'
import { WeatherService } from '@core/services/weather/weather.service'
import { Subscription, firstValueFrom, lastValueFrom, tap } from 'rxjs'
import {
    selectFavoriteCities,
    selectSelectedCity,
} from '@store/weather/weather.selectors'
import { selectMethod } from '@app/store/preferences/preferences.selectors'
import { toggleMethod } from '@app/store/preferences/preferences.actions'
import { selectCity, toggleFavorite } from '@app/store/weather/weather.actions'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
    constructor(private store: Store, private weatherService: WeatherService) {}
    weather: Weather | null = null
    forecast: Forecast | null = null
    weatherSubscription: Subscription | null = null
    methodSubscription: Subscription | null = null

    selectedCity$ = this.store.select(selectSelectedCity)
    favoriteCities$ = this.store.select(selectFavoriteCities)
    method$ = this.store.select(selectMethod)

    async onCityChange(city: City | null) {
        if (!city) return
        const [weather, forecast] = await Promise.all([
            await this.weatherService.getWeather(city.Key),
            await this.weatherService.getForecast(city.Key),
        ])
        this.weather = weather
        this.forecast = forecast
    }

    async onMethodChange() {
        const city = await firstValueFrom(this.selectedCity$)
        if (!city) return
        this.forecast = await this.weatherService.getForecast(city.Key)
    }

    onToggleFavorite(city: City | null) {
        if (!city) return
        this.store.dispatch(toggleFavorite({ city }))
    }

    onSetCity(city: City) {
        this.store.dispatch(selectCity({ city }))
    }

    onToggleMethod() {
        this.store.dispatch(toggleMethod())
    }

    ngOnInit(): void {
        this.weatherSubscription = this.selectedCity$
            .pipe(tap(this.onCityChange.bind(this)))
            .subscribe()
        this.methodSubscription = this.method$
            .pipe(tap(this.onMethodChange.bind(this)))
            .subscribe()
    }

    ngOnDestroy() {
        this.weatherSubscription?.unsubscribe()
        this.methodSubscription?.unsubscribe()
    }
}
