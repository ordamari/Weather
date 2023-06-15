import { createReducer, on, ActionReducer } from '@ngrx/store'
import { Method } from '@shared/enums/method.enum'
import { Theme } from '@shared/enums/theme.enum'
import { setTheme, toggleMethod } from './preferences.actions'

export type PreferencesState = {
    method: Method
    theme: Theme
}

const preferencesState = {
    method: Method.Metric,
    theme: Theme.Light,
} as PreferencesState

const preferencesReducer: ActionReducer<PreferencesState> = createReducer(
    preferencesState,
    on(
        toggleMethod,
        (state): PreferencesState => ({
            ...state,
            method:
                state.method === Method.Metric
                    ? Method.Imperial
                    : Method.Metric,
        })
    ),
    on(
        setTheme,
        (state, action): PreferencesState => ({
            ...state,
            theme: action.theme,
        })
    )
)

export default preferencesReducer
