import { createReducer, on, ActionReducer } from '@ngrx/store'
import { setTheme, toggleMethod } from './preferences.actions'
import initialState, { PreferencesState } from './preferences.state'

const preferencesState = initialState

const preferencesReducer: ActionReducer<PreferencesState> = createReducer(
    preferencesState,
    on(
        toggleMethod,
        (state, action): PreferencesState => ({
            ...state,
            method: action.method,
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
