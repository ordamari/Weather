import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'weather',
        pathMatch: 'full',
    },
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
        path: '**',
        redirectTo: 'weather', //todo: 404 page
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
