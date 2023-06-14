import { Component, OnDestroy, OnInit } from '@angular/core'
import { WeatherState } from '@app/store/weather.reducer'
import { Store } from '@ngrx/store'
import { City } from '@shared/models/city.model'
import { Forecast } from '@shared/models/forecast.model'
import { Weather } from '@shared/models/weather.model'
import { WeatherService } from '@shared/services/weather.service'
import { Subscription, tap } from 'rxjs'

// TODO: MOVE THIS TYPE TO A SHARED FOLDER
export type RootState = {
    weather: WeatherState
}

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
    constructor(
        private store: Store<RootState>,
        private weatherService: WeatherService
    ) {}
    selectedCity$ = this.store.select((state) => state.weather.selectedCity)
    weather: Weather | null = null
    forecast: Forecast | null = null
    subscription: Subscription | null = null

    async onCityChange(city: City | null) {
        if (!city) return
        const [weather, forecast] = await Promise.all([
            await this.weatherService.getWeather(city.Key),
            await this.weatherService.getForecast(city.Key),
        ])
        this.weather = weather
        this.forecast = forecast
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
