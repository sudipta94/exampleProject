import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appStateModels';
import { IntermideateData } from 'src/app/models/registrationModels';
import { RegistrationStepOne } from 'src/app/store/actions/registration.action';

@Component({
  selector: 'app-registration-first-container',
  templateUrl: './registration-first-container.component.html',
  styleUrls: ['./registration-first-container.component.scss']
})
export class RegistrationFirstContainerComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
  }
  nextEvent(data: IntermideateData){
    this.store.dispatch(new RegistrationStepOne(data))
    this.router.navigate(['registration','registration-part-two'])
  }
  backEvent(){
    this.router.navigate(['']);
  }
}
