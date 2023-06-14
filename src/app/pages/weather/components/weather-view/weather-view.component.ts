import { Component, Input } from '@angular/core'
import { Method } from '@shared/enums/method.enum'
import { City } from '@shared/models/city.model'
import { Weather } from '@shared/models/weather.model'

@Component({
    selector: 'app-weather-view',
    templateUrl: './weather-view.component.html',
    styleUrls: ['./weather-view.component.scss'],
})
export class WeatherViewComponent {
    @Input() selectedCity: City | null = null
    @Input() weather!: Weather
    method = Method.Metric

    get degreesByMethod(): number {
        return this.method === Method.Metric
            ? this.weather.Temperature.Metric.Value
            : this.weather.Temperature.Imperial.Value
    }
}
