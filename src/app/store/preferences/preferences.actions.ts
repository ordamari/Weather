import { createAction } from '@ngrx/store'
import { Theme } from '@shared/enums/theme.enum'
import { THEME_KEY } from '../constants/theme.storage-key'
import toggleStorageMethod from '../utils/toggleStorageMethod'

export const setTheme = createAction(
    '[Preferences] Set Theme',
    (theme: Theme) => {
        localStorage.setItem(THEME_KEY, theme)
        return { theme }
    }
)

export const toggleMethod = createAction('[Preferences] Toggle Method', () => {
    const afterToggle = toggleStorageMethod()
    return {
        method: afterToggle,
    }
})
