import { Action } from '@ngrx/store';
import { IntermideateData, userSignUp } from 'src/app/models/registrationModels';

export enum RegistrationActionTypes {
    Registration_Step_One_Action='[REGISTRATION] Registration Step One Action',

    User_Registration_Action ='[REGISTRATION] User Registration Action',
    User_Registration_Success_Action ='[REGISTRATION] User Registration Success Action',
    User_Registration_Failure_Action ='[REGISTRATION] User Registration Failure Action',

    Validate_Email_Action='[REGISTRATION] Validate Email Action',
    Validate_Email_Success_Action='[REGISTRATION] Validate Email Success Action',
    Validate_Email_Failure_Action='[REGISTRATION] Validate Email Failure Action',
}
export class RegistrationStepOne implements Action {
    readonly type = RegistrationActionTypes.Registration_Step_One_Action;
    constructor(public payload: IntermideateData){}
}

export class UserRegistrationAction implements Action {
    readonly type = RegistrationActionTypes.User_Registration_Action;
    constructor(public payload: userSignUp){}
}
export class UserRegistrationSuccessAction implements Action {
    readonly type = RegistrationActionTypes.User_Registration_Success_Action;
}
export class UserRegistrationFailureAction implements Action {
    readonly type = RegistrationActionTypes.User_Registration_Failure_Action;
    constructor(public payload: boolean){}
}

export class ValidateEmailAction implements Action {
    readonly type = RegistrationActionTypes.Validate_Email_Action;
    constructor(public payload: userSignUp){}
}
export class ValidateEmailSuccessAction implements Action {
    readonly type = RegistrationActionTypes.Validate_Email_Success_Action;
}
export class ValidateEmailFailureAction implements Action {
    readonly type = RegistrationActionTypes.Validate_Email_Failure_Action;
    constructor(public payload: boolean){}
}
export type RegistrationAction= RegistrationStepOne
| UserRegistrationAction
| UserRegistrationSuccessAction
| UserRegistrationFailureAction
| ValidateEmailAction
| ValidateEmailSuccessAction
| ValidateEmailFailureAction