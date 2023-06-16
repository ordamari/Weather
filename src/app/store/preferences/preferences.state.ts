import { Method } from '@shared/enums/method.enum'
import { Theme } from '@shared/enums/theme.enum'
import getStorageTheme from '../utils/getStorageTheme'
import getStorageMethod from '../utils/getStorageMethod'

export type PreferencesState = {
    method: Method
    theme: Theme
}

export default {
    method: getStorageMethod(),
    theme: getStorageTheme(),
} as PreferencesState
