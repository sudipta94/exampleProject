import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { MainserviceService } from 'src/app/service/mainservice.service';
import { AppState } from 'src/app/models/appStateModels';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoginLoadAction, LoginLoadFailureAction, LoaginActionTypes, LoginLoadSuccesAction } from '../actions/login.actions';
import { UserDetails } from 'src/app/models/loginModels';
import { MatSnackBar } from '@angular/material';


@Injectable()
export class LoginEffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private mainservice : MainserviceService, private router: Router){}

    getAlluser$ = createEffect(() => this.actions$
    .pipe(
        ofType(LoaginActionTypes.Login_Load_Action),
        mergeMap((action: LoginLoadAction) =>
            this.mainservice.getAllUser().pipe(
                map((response:  UserDetails[]) => {
                    var userData =response.find(m=> m.email== action.payload.email)
                    if(!!userData){
                        if(userData.password==action.payload.password){
                            return new LoginLoadSuccesAction(userData);
                        }else{
                            return new LoginLoadFailureAction(true)
                        }
                    }else{
                        return new LoginLoadFailureAction(true)
                    }
                }),
                catchError(() => of(new LoginLoadFailureAction(true)))
            )
        )
    )
);
}
