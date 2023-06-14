import { Component, Input } from '@angular/core'
import { DailyForecast, Forecast } from '@shared/models/forecast.model'

@Component({
    selector: 'app-forecast-view',
    templateUrl: './forecast-view.component.html',
    styleUrls: ['./forecast-view.component.scss'],
})
export class ForecastViewComponent {
    @Input() forecast!: Forecast

    get dailyForecasts(): DailyForecast[] {
        return this.forecast.DailyForecasts
    }
}
