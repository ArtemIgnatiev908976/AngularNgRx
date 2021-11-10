import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../shared/types/appState.interface";
import {AuthStateInterface} from "../types/authState.interface";
//вспомогательная функция для создания других функций
export const authFeatureSelector = createFeatureSelector<AppStateInterface,
  AuthStateInterface>('auth')
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting) //из любого места из SubmittingSelector можно получить поле authState
