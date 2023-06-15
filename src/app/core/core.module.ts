import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { ensureModuleLoadedOnce } from '@core/guards/ensureModuleLoadedOnce.guard'
import { HeaderComponent } from './components/header/header.component'
import { AppRoutingModule } from '@app/app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ToggleComponent } from '@shared/ui/toggle/toggle.component'
import { CommonModule } from '@angular/common'
import { ErrorInterceptor } from './interceptors/error.interceptor'
import { ToastrModule } from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        CommonModule,
        ToastrModule.forRoot(),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true,
        },
    ],
    exports: [HeaderComponent],
    declarations: [HeaderComponent, ToggleComponent],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        ensureModuleLoadedOnce(parentModule, 'CoreModule')
    }
}
