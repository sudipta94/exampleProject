import { dashboardMain } from "src/app/models/dashboardModels";
import { DashboardAction } from '../actions/dashboard.actions';

const initialState: dashboardMain = {
    loading: false
}

export function DashBoardReducer(state: dashboardMain = initialState, action: DashboardAction) {
    switch (action.type) {
        default:
            return state;
    }
}