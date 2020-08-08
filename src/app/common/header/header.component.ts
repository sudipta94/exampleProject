import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/appStateModels';
import { LogOutAction } from 'src/app/store/actions/login.actions';
import { Observable } from 'rxjs';
import { LoginMain } from 'src/app/models/loginModels';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor( private store: Store<AppState>) { }
  IsLogin$ : Observable<LoginMain>
  ngOnInit() {
   this.IsLogin$ = this.store.select(state=> state.login)
  }

  Logout() {
    this.store.dispatch(new LogOutAction())
  }
}
