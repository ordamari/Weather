import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { City } from '@shared/models/city.model'
import { Forecast } from '@shared/models/forecast.model'
import { Weather } from '@shared/models/weather.model'
import { WeatherService } from '@core/services/weather/weather.service'
import { Subscription, firstValueFrom, tap } from 'rxjs'
import {
    selectFavoriteCities,
    selectSelectedCity,
} from '@store/weather/weather.selectors'
import {
    selectMethod,
    selectTheme,
} from '@app/store/preferences/preferences.selectors'
import { toggleMethod } from '@app/store/preferences/preferences.actions'
import { selectCity, toggleFavorite } from '@app/store/weather/weather.actions'
import { ToastrService } from 'ngx-toastr'

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
    constructor(
        private store: Store,
        private weatherService: WeatherService,
        private toastr: ToastrService
    ) {}
    weather: Weather | null = null
    forecast: Forecast | null = null
    weatherSubscription: Subscription | null = null
    methodSubscription: Subscription | null = null

    selectedCity$ = this.store.select(selectSelectedCity)
    favoriteCities$ = this.store.select(selectFavoriteCities)
    method$ = this.store.select(selectMethod)
    theme$ = this.store.select(selectTheme)
    hasError = false

    get isLoad() {
        return !this.weather || !this.forecast
    }

    async onCityChange(city: City | null) {
        if (!city) return
        try {
            const [weather, forecast] = await Promise.all([
                await this.weatherService.getWeather(city.Key),
                await this.weatherService.getForecast(city.Key),
            ])
            this.weather = weather
            this.forecast = forecast
        } catch (e) {
            this.hasError = true
        }
    }

    async onMethodChange() {
        const city = await firstValueFrom(this.selectedCity$)
        if (!city) return
        this.forecast = await this.weatherService.getForecast(city.Key)
    }

    private isCityFavorite(city: City, favoriteCities: City[]) {
        return favoriteCities.some((c) => c.Key === city.Key)
    }

    async onToggleFavorite(city: City | null) {
        if (!city) return
        this.store.dispatch(toggleFavorite({ city }))
        const favoriteCities = await firstValueFrom(this.favoriteCities$)
        if (this.isCityFavorite(city, favoriteCities))
            this.toastr.success(`${city.LocalizedName} added to favorites`)
        else this.toastr.success(`${city.LocalizedName} removed from favorites`)
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

    async onTryAgain() {
        this.hasError = false
        const selectedCity = await firstValueFrom(this.selectedCity$)
        if (selectedCity) this.onCityChange(selectedCity)
    }
}
