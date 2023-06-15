import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeatherComponent } from './weather.component'
import { RouterModule } from '@angular/router'
import { SearchComponent } from '@shared/ui/search/search.component'
import { FormsModule } from '@angular/forms'
import { SearchCitiesComponent } from './components/search-cities/search-cities.component'
import { WeatherIconsComponent } from './components/weather-icons/weather-icons.component'
import { WeatherViewComponent } from './components/weather-view/weather-view.component'
import { WeatherDegreesComponent } from './components/weather-degrees/weather-degrees.component'
import { ForecastViewComponent } from './components/forecast-view/forecast-view.component'
import { DailyForecastViewComponent } from './components/daily-forecast-view/daily-forecast-view.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { GeolocationComponent } from './components/geolocation/geolocation.component'
import { LoaderComponent } from '@shared/ui/loader/loader.component';
import { ToggleMethodsComponent } from './components/toggle-methods/toggle-methods.component'
@NgModule({
    declarations: [
        WeatherComponent,
        LoaderComponent,
        SearchComponent,
        SearchCitiesComponent,
        WeatherIconsComponent,
        WeatherViewComponent,
        WeatherDegreesComponent,
        ForecastViewComponent,
        DailyForecastViewComponent,
        GeolocationComponent,
        ToggleMethodsComponent,
    ],
    imports: [
        FontAwesomeModule,
        CommonModule,
        RouterModule.forChild([{ path: '', component: WeatherComponent }]),
        FormsModule,
    ],
})
export class WeatherModule {}
