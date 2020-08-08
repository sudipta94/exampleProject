import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appStateModels';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RegistrationActionTypes, UserRegistrationAction, UserRegistrationSuccessAction, UserRegistrationFailureAction, ValidateEmailAction, ValidateEmailFailureAction, ValidateEmailSuccessAction } from '../actions/registration.action';
import { MainserviceService } from 'src/app/service/mainservice.service';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/models/loginModels';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class Registrationffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private mainservice : MainserviceService, private router: Router, private _snackBar: MatSnackBar){}
    createUser$ = createEffect(() => this.actions$
    .pipe(
        ofType(RegistrationActionTypes.User_Registration_Action),
        mergeMap((action: UserRegistrationAction) =>
                 this.mainservice.userCreateService(action.payload).pipe(
                     map((response) => {
                         console.log(response);
                         const snackbar = this._snackBar.open('User create successfully', "DISMISS", {
                            duration: 3000
                          });
                         this.router.navigate(['login'], { replaceUrl: true })
                         return new UserRegistrationSuccessAction();
                     }),
                catchError(error => of(new UserRegistrationFailureAction(true)))
            )
        )
    )
);

    validateuser$ = createEffect(() => this.actions$
        .pipe(
            ofType(RegistrationActionTypes.Validate_Email_Action),
            mergeMap((action: ValidateEmailAction) =>
                this.mainservice.getAllUser().pipe(
                    map((response: UserDetails[]) => {
                        console.log(response);
                        var userData = response.find(m => m.email == action.payload.email)
                        if (!!userData) {
                            return new ValidateEmailFailureAction(true)
                        } else {
                            this.store.dispatch(new UserRegistrationAction(action.payload))
                            return new ValidateEmailSuccessAction()
                        }
                    }),
                    catchError(error => of(new ValidateEmailFailureAction(true)))
                )
            )
        )
    );

}
