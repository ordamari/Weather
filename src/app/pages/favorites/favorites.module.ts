import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FavoritesComponent } from './favorites.component'
import { RouterModule } from '@angular/router'
import { FavoritesViewComponent } from './components/favorites-view/favorites-view.component'
import { FavoriteViewComponent } from './components/favorite-view/favorite-view.component'

@NgModule({
    declarations: [
        FavoritesComponent,
        FavoritesViewComponent,
        FavoriteViewComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: FavoritesComponent }]),
    ],
})
export class FavoritesModule {}
