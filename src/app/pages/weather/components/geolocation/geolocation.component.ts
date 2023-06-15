import { Component, EventEmitter, Output } from '@angular/core'
import { City } from '@shared/models/city.model'
import { GeolocationService } from '@core/services/geolocation/geolocation.service'
import { WeatherService } from '@core/services/weather/weather.service'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-geolocation',
    templateUrl: './geolocation.component.html',
    styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent {
    faLocationCrosshairs = faLocationCrosshairs
    constructor(
        private geolocationService: GeolocationService,
        private weatherService: WeatherService
    ) {}
    @Output() getCityByGeolocation = new EventEmitter<City>()

    async getLocation() {
        const coords = await this.geolocationService.getLocation()
        const city = await this.weatherService.getCityByGeolocation(
            coords.latitude,
            coords.longitude
        )
        if (city) {
            this.getCityByGeolocation.emit(city as City)
        }
    }
}
