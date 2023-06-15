import { createAction } from '@ngrx/store'
import { Theme } from '@shared/enums/theme.enum'

export const setTheme = createAction(
    '[Preferences] Set Theme',
    (theme: Theme) => ({ theme })
)

export const toggleMethod = createAction('[Preferences] Toggle Method')
