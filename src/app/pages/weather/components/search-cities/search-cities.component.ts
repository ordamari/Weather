import { Component, OnDestroy } from '@angular/core'
import { City } from '@shared/models/city.model'
import { WeatherService } from '@shared/services/weather.service'

@Component({
    selector: 'app-search-cities',
    templateUrl: './search-cities.component.html',
    styleUrls: ['./search-cities.component.scss'],
})
export class SearchCitiesComponent implements OnDestroy {
    query = ''
    cities: City[] = []
    timeOut: NodeJS.Timeout | null = null

    constructor(private weatherService: WeatherService) {}
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

    ngOnDestroy(): void {
        if (this.timeOut) clearTimeout(this.timeOut)
    }
}
