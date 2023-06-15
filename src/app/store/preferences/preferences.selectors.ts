import { createFeatureSelector, createSelector } from '@ngrx/store'
import { PreferencesState } from './preferences.reducer'

export const selectPreferencesState =
    createFeatureSelector<PreferencesState>('preferences')

export const selectTheme = createSelector(
    selectPreferencesState,
    (preferencesState: PreferencesState) => preferencesState.theme
)

export const selectMethod = createSelector(
    selectPreferencesState,
    (preferencesState: PreferencesState) => preferencesState.method
)
