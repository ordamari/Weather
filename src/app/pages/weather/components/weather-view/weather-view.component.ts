import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Method } from '@shared/enums/method.enum'
import { City } from '@shared/models/city.model'
import { Weather } from '@shared/models/weather.model'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-weather-view',
    templateUrl: './weather-view.component.html',
    styleUrls: ['./weather-view.component.scss'],
})
export class WeatherViewComponent {
    @Input() selectedCity: City | null = null
    @Input() favoriteCities: City[] | null = null
    @Input() weather!: Weather
    @Output() toggleFavorite = new EventEmitter<City | null>()
    method = Method.Metric
    faHeart = faHeart

    get degreesByMethod(): number {
        return this.method === Method.Metric
            ? this.weather.Temperature.Metric.Value
            : this.weather.Temperature.Imperial.Value
    }

    get isSelectedCityFavorite(): boolean {
        if (!this.selectedCity || !this.favoriteCities) return false
        return this.favoriteCities.some(
            (city) => city.Key === this.selectedCity?.Key
        )
    }
}
