import { Component, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'
import { City } from '@shared/models/city.model'
import { selectCity } from '@app/store/weather/weather.actions'
import { WeatherService } from '@shared/services/weather/weather.service'

@Component({
    selector: 'app-search-cities',
    templateUrl: './search-cities.component.html',
    styleUrls: ['./search-cities.component.scss'],
})
export class SearchCitiesComponent implements OnDestroy {
    query = ''
    cities: City[] = []
    timeOut: NodeJS.Timeout | null = null

    constructor(private store: Store, private weatherService: WeatherService) {}
    onQueryChange(query: string) {
        this.debouncedGetCities(query)
        this.query = query
    }

    debouncedGetCities(query: string) {
        if (this.timeOut) clearTimeout(this.timeOut)
        this.timeOut = setTimeout(async () => {
            const cities = await this.weatherService.getCities(query)
            this.cities = cities
        }, 500)
    }

    onOptionClick(city: City) {
        this.store.dispatch(selectCity({ city }))
    }

    ngOnDestroy(): void {
        if (this.timeOut) clearTimeout(this.timeOut)
    }
}
