import { Component, EventEmitter, Input, Output } from '@angular/core'
import { City } from '@shared/models/city.model'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-favorite-view',
    templateUrl: './favorite-view.component.html',
    styleUrls: ['./favorite-view.component.scss'],
})
export class FavoriteViewComponent {
    @Input() city!: City
    @Output() removeFavorite = new EventEmitter<City>()
    @Output() selectCity = new EventEmitter<City>()
    faHeart = faHeart
}
