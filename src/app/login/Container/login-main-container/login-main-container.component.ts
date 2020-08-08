import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/loginModels';
import { Router } from '@angular/router';
import { AppState } from 'src/app/models/appStateModels';
import { Store } from '@ngrx/store';
import { LoginLoadAction } from 'src/app/store/actions/login.actions';

@Component({
  selector: 'app-login-main-container',
  templateUrl: './login-main-container.component.html',
  styleUrls: ['./login-main-container.component.scss']
})
export class LoginMainContainerComponent implements OnInit {

  constructor(private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
  }
  SubmitData(data: UserLogin){
    console.log(data);
    this.store.dispatch(new LoginLoadAction(data))
  }
}
