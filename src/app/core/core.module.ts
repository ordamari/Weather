import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ensureModuleLoadedOnce } from '@core/guards/ensureModuleLoadedOnce.guard'
import { HeaderComponent } from './components/header/header.component'
import { AppRoutingModule } from '@app/app-routing.module'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
    imports: [HttpClientModule, AppRoutingModule, FontAwesomeModule],
    providers: [],
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        ensureModuleLoadedOnce(parentModule, 'CoreModule')
    }
}
