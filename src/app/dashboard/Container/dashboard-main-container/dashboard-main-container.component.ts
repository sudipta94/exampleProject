import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/models/appStateModels';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginMain, UserDetails } from 'src/app/models/loginModels';

@Component({
  selector: 'app-dashboard-main-container',
  templateUrl: './dashboard-main-container.component.html',
  styleUrls: ['./dashboard-main-container.component.scss']
})
export class DashboardMainContainerComponent implements OnInit {

  constructor(private store: Store<AppState>) { }
  user$ : Observable<UserDetails>;
  ngOnInit() {
    this.user$ = this.store.select(state=> state.login.userDetail)
  }

}
