import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appStateModels';
import { take } from 'rxjs/operators';
import { IntermideateData, userSignUp } from 'src/app/models/registrationModels';
import { Observable } from 'rxjs';
import { UserRegistrationAction, ValidateEmailAction } from 'src/app/store/actions/registration.action';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-registration-second-container',
  templateUrl: './registration-second-container.component.html',
  styleUrls: ['./registration-second-container.component.scss']
})
export class RegistrationSecondContainerComponent implements OnInit, OnDestroy {
  intermData$: Observable<IntermideateData>
  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.intermData$=this.store.select(state=> state.registration.intermdeate_data)
    this.store.select(state=> state.registration.intermdeate_data).pipe(take(1)).subscribe(
      (data)=>{
        if(!data){
          this.router.navigate(['login'])
        }
      }
    )
  }
  BackEvent(){
    this.router.navigate(['registration','registration-part-one'])
  }
  UserSubmitData(data: userSignUp){
    this.store.dispatch(new ValidateEmailAction(data))
  }
  ngOnDestroy(){

  }
}
