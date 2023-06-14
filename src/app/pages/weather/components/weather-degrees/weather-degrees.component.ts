import { Component, Input } from '@angular/core'
import { Method } from '@shared/enums/method.enum'

@Component({
    selector: 'app-weather-degrees',
    templateUrl: './weather-degrees.component.html',
    styleUrls: ['./weather-degrees.component.scss'],
})
export class WeatherDegreesComponent {
    @Input() degrees!: number
    @Input() method!: Method

    get methodChar(): string {
        return this.method === Method.Metric ? 'C' : 'F'
    }
}
