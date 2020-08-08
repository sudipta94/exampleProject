import { Action } from '@ngrx/store';
import { userSignUp } from 'src/app/models/registrationModels';
import { UserDetails, UserLogin } from 'src/app/models/loginModels';

export enum LoaginActionTypes {
    Login_Load_Action= '[LOGIN] Login Load Action',
    Login_Load_Action_Success= '[LOGIN] Login Load Success Action',
    Login_Load_Action_Failure= '[LOGIN] Login Load Failure Action',
    Log_Out_Action= '[LOGIN] Log_Out_Action',
    
}
export class LoginLoadAction implements Action {
    readonly type = LoaginActionTypes.Login_Load_Action;
    constructor(public payload: UserLogin){}
}
export class LoginLoadSuccesAction implements Action {
    readonly type = LoaginActionTypes.Login_Load_Action_Success;
    constructor(public payload: UserDetails){}
}
export class LoginLoadFailureAction implements Action {
    readonly type = LoaginActionTypes.Login_Load_Action_Failure;
    constructor(public payload: boolean){}
}

export class LogOutAction implements Action {
    readonly type =LoaginActionTypes.Log_Out_Action
}
export type LoaginAction= LoginLoadAction
| LoginLoadSuccesAction
| LoginLoadFailureAction
| LogOutAction