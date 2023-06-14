import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-weather-icons',
    templateUrl: './weather-icons.component.html',
    styleUrls: ['./weather-icons.component.scss'],
})
export class WeatherIconsComponent {
    @Input() icon!: number
    @Input() alt = ''

    get iconUrl() {
        return `https://developer.accuweather.com/sites/default/files/${this.icon
            .toString()
            .padStart(2, '0')}-s.png`
    }
}
