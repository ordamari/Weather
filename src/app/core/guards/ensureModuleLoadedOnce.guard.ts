import { NgModule } from '@angular/core'

export function ensureModuleLoadedOnce(
    parentModule: NgModule | null,
    moduleName: string
) {
    if (parentModule) {
        throw new Error(
            `${moduleName} has already been loaded. Import ${moduleName} modules in the AppModule only.`
        )
    }
}
