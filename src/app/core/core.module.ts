import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ensureModuleLoadedOnce } from '@core/guards/ensureModuleLoadedOnce.guard'
import { HeaderComponent } from './components/header/header.component'
import { AppRoutingModule } from '@app/app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { ToggleComponent } from '@shared/ui/toggle/toggle.component'
import { CommonModule } from '@angular/common'

@NgModule({
    imports: [
        HttpClientModule,
        AppRoutingModule,
        FontAwesomeModule,
        CommonModule,
    ],
    providers: [],
    exports: [HeaderComponent],
    declarations: [HeaderComponent, ToggleComponent],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        ensureModuleLoadedOnce(parentModule, 'CoreModule')
    }
}
