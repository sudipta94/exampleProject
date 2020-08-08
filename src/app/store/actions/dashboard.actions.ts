import { Action } from '@ngrx/store';

export enum DashboardActionTypes {
    DashBoard_Load_Action= '[DASHBOARD] DashBoard Load Action',
    DashBoard_Load_Success_Action= '[DASHBOARD] DashBoard Load Action',
    DashBoard_Load_Failure_Action= '[DASHBOARD] DashBoard Load Action',
}
export class DashboardLoadAction implements Action {
    readonly type = DashboardActionTypes.DashBoard_Load_Action;
}

export type DashboardAction= DashboardLoadAction