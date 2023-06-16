import { Theme } from '@shared/enums/theme.enum'
import { THEME_KEY } from '../constants/theme.storage-key'

export default function () {
    const storageTheme = localStorage.getItem(THEME_KEY) as Theme
    const values = Object.values(Theme)
    if (values.includes(storageTheme as unknown as Theme)) {
        return storageTheme
    }
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDark ? Theme.Dark : Theme.Light
}
