import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { selectCity, toggleFavorite } from '@app/store/weather/weather.actions'
import { Store } from '@ngrx/store'
import { City } from '@shared/models/city.model'
import { Observable } from 'rxjs'
import { selectFavoriteCities } from '@store/weather/weather.selectors'

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
    constructor(private store: Store, private router: Router) {}

    favoriteCities$: Observable<City[]> =
        this.store.select(selectFavoriteCities)

    onToggleFavorite(city: City) {
        this.store.dispatch(toggleFavorite({ city }))
    }

    onSelectCity(city: City) {
        this.store.dispatch(selectCity({ city }))
        console.log('city', city)

        this.router.navigate(['/weather'])
    }
}