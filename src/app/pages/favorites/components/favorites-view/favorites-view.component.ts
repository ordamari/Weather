import { Component, EventEmitter, Input, Output } from '@angular/core'
import { City } from '@shared/models/city.model'

@Component({
    selector: 'app-favorites-view',
    templateUrl: './favorites-view.component.html',
    styleUrls: ['./favorites-view.component.scss'],
})
export class FavoritesViewComponent {
    @Input() favoriteCities: City[] | null = []
    @Output() removeFavorite = new EventEmitter<City>()
    @Output() selectCity = new EventEmitter<City>()
}
