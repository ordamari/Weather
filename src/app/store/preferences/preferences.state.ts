import { Method } from '@shared/enums/method.enum'
import { Theme } from '@shared/enums/theme.enum'
import { METHOD_KEY } from '../constants/method.storage-key'
import { THEME_KEY } from '../constants/theme.storage-key'

export type PreferencesState = {
    method: Method
    theme: Theme
}

function getMethod() {
    const storageMethod = localStorage.getItem(METHOD_KEY) as Method
    const values = Object.values(Method)
    if (values.includes(storageMethod as unknown as Method)) {
        return storageMethod
    }
    return Method.Metric
}

function getTheme() {
    const storageTheme = localStorage.getItem(THEME_KEY) as Theme
    const values = Object.values(Theme)
    if (values.includes(storageTheme as unknown as Theme)) {
        return storageTheme
    }
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDark ? Theme.Dark : Theme.Light
}

export default {
    method: getMethod(),
    theme: getTheme(),
} as PreferencesState
