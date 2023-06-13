import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { ensureModuleLoadedOnce } from '@core/guards/ensureModuleLoadedOnce.guard'

@NgModule({
    imports: [HttpClientModule],
    providers: [],
    exports: [],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        ensureModuleLoadedOnce(parentModule, 'CoreModule')
    }
}
