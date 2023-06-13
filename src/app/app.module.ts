import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { CoreModule } from './core/core.module'
import { StoreModule } from '@ngrx/store'
import weatherReducer from './store/weather.reducer'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CoreModule,
        StoreModule.forRoot({
            weather: weatherReducer,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
