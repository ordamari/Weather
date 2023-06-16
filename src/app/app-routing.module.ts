import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: 'weather',
        loadChildren: () =>
            import('./pages/weather/weather.module').then(
                (m) => m.WeatherModule
            ),
    },
    {
        path: 'favorites',
        loadChildren: () =>
            import('./pages/favorites/favorites.module').then(
                (m) => m.FavoritesModule
            ),
    },
    {
        path: '',
        redirectTo: 'weather',
        pathMatch: 'full',
    },
    {
        path: '**',
        loadChildren: () =>
            import('./pages/not-found/not-found.module').then(
                (m) => m.NotFoundModule
            ),
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
