import { Component } from '@angular/core'
import { City } from '@shared/models/city.model'
import { WeatherService } from '@shared/services/weather.service'

@Component({
    selector: 'app-search-cities',
    templateUrl: './search-cities.component.html',
    styleUrls: ['./search-cities.component.scss'],
})
export class SearchCitiesComponent {
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
        this.timeOut = setTimeout(() => {
            this.weatherService.getCities(query)
        }, 500)
    }
}
