import { createAction, props } from '@ngrx/store'
import { City } from '@shared/models/city.model'

export const selectCity = createAction(
    '[Weather] Select City',
    props<{ city: City }>()
)

export const toggleFavorite = createAction(
    '[Weather] Toggle Favorite',
    props<{ city: City }>()
)
