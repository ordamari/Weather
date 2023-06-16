import { createReducer, on, ActionReducer } from '@ngrx/store'
import { Method } from '@shared/enums/method.enum'
import { Theme } from '@shared/enums/theme.enum'
import { setTheme, toggleMethod } from './preferences.actions'
import initialState, { PreferencesState } from './preferences.state'

const preferencesState = initialState

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
