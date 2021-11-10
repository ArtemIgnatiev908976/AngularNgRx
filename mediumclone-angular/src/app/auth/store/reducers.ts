import {AuthStateInterface} from "../types/authState.interface";
import {Action, createReducer, on} from "@ngrx/store";
import {registerAction} from "./actions/register.action";


const initialState: AuthStateInterface = {
  isSubmitting: false
}

//функция котороя меняет initialState
const authReducer = createReducer(
  initialState,
  on(registerAction,
    (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true  //перезаписываем новыми полями
  }))
)


export function reducers(state: AuthStateInterface, action: Action){
  return authReducer(state, action);
}
