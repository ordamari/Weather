import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CoreModule } from '@core/core.module'
import { StoreModule } from '@ngrx/store'
import rootReducer from '@store/root.reducer'

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        StoreModule.forRoot(rootReducer),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
