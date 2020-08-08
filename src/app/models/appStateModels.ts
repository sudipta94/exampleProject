import { dashboardMain } from './dashboardModels';
import { LoginMain } from './loginModels';
import { registrationMain } from './registrationModels';

export interface AppState {
    readonly dashboard?: dashboardMain;
    readonly login?: LoginMain;
    readonly registration?: registrationMain;
}