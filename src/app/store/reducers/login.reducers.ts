import { LoginMain } from 'src/app/models/loginModels';
import { LoaginAction, LoaginActionTypes } from '../actions/login.actions';


const initialState: LoginMain = {
    loading: false,
    error: false,
    isLogin: false,
    userDetail: undefined
}

export function LoaginReducer(state: LoginMain = initialState, action: LoaginAction) {
    switch (action.type) {
        case LoaginActionTypes.Login_Load_Action:
            return {...state, loading: true, error: false}
        case LoaginActionTypes.Login_Load_Action_Success:
            return{...state, loading: false, userDetail: action.payload, isLogin: true}
        case LoaginActionTypes.Login_Load_Action_Failure:
            return {...state, loading: false, userDetail: undefined, error: true, isLogin: false}
        case LoaginActionTypes.Log_Out_Action:
            return {
                loading: false,
                error: false,
                isLogin: false,
                userDetail: undefined
            }
        default:
            return state;
    }
}