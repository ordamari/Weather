import { createAction, props } from '@ngrx/store'
import { City } from '@shared/models/city.model'
import toggleStorageFavoriteCities from '../utils/toggleStorageFavoriteCities'

export const selectCity = createAction(
    '[Weather] Select City',
    props<{ city: City }>()
)

export const toggleFavorite = createAction(
    '[Weather] Toggle Favorite',
    ({ city }: { city: City }) => {
        toggleStorageFavoriteCities(city)
        return { city }
    }
)
