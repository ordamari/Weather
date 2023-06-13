import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { WeatherComponent } from './weather.component'
import { RouterModule } from '@angular/router'
import { SearchComponent } from 'src/app/common/components/search/search.component'
import { FormsModule } from '@angular/forms'
import { SearchCitiesComponent } from './components/search-cities/search-cities.component'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [WeatherComponent, SearchComponent, SearchCitiesComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([{ path: '', component: WeatherComponent }]),
        FormsModule,
    ],
})
export class WeatherModule {}
