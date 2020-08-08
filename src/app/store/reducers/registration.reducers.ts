import { registrationMain } from 'src/app/models/registrationModels';
import { RegistrationAction, RegistrationActionTypes } from '../actions/registration.action';

const initialState: registrationMain = {
    loading: false,
    intermdeate_data: undefined,
    error: false
}

export function RegistrationReducer(state: registrationMain = initialState, action: RegistrationAction) {
    switch (action.type) {
        case RegistrationActionTypes.Registration_Step_One_Action:
            return{...state, intermdeate_data: action.payload}
        case RegistrationActionTypes.User_Registration_Action:
            return {...state, loading: true, error: false }
        case RegistrationActionTypes.User_Registration_Success_Action:
            return {...state, loading: false, intermdeate_data: undefined }
        case RegistrationActionTypes.User_Registration_Failure_Action:
            return {...state , loading: false, error: true, intermdeate_dataL: undefined}

        case RegistrationActionTypes.Validate_Email_Action:
            return {...state, loading: true , error: false}
        case RegistrationActionTypes.Validate_Email_Success_Action:
            return {...state, loading: false, intermdeate_data: undefined }
        case RegistrationActionTypes.Validate_Email_Failure_Action:
            return {...state , loading: false, error: true, intermdeate_dataL: undefined}
        default:
            return state;
    }
}