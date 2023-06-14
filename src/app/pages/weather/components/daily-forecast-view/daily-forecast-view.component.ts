import { Component, Input } from '@angular/core'
import { Method } from '@shared/enums/method.enum'
import { DailyForecast } from '@shared/models/forecast.model'

@Component({
    selector: 'app-daily-forecast-view',
    templateUrl: './daily-forecast-view.component.html',
    styleUrls: ['./daily-forecast-view.component.scss'],
})
export class DailyForecastViewComponent {
    @Input() dailyForecast!: DailyForecast

    get maxDegrees(): number {
        return this.dailyForecast.Temperature.Maximum.Value
    }

    get minDegrees(): number {
        return this.dailyForecast.Temperature.Minimum.Value
    }

    get method(): Method {
        return this.dailyForecast.Temperature.Maximum.Unit === 'F'
            ? Method.Imperial
            : Method.Metric
    }
}
