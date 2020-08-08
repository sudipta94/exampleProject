import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppState } from './models/appStateModels';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { SubSink } from 'subsink';
import { MatSnackBar } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'webskitters';
  private subs = new SubSink();
  constructor(private router: Router, private store: Store<AppState>, private _snackBar: MatSnackBar, private spinner: NgxSpinnerService){    
  }
  ngOnInit() {
    this.subs.add(this.store.select(state=> state.login.isLogin).subscribe(
      (data)=>{
        if(!!data){
          this.router.navigate(['dashboard'],{replaceUrl: true})
        }else{
          this.router.navigate(['login'],{replaceUrl: true})
        }
      }
    ))

    this.subs.add(this.store.select(state=> state.login.error).subscribe(
      async (data)=>{
        if(data){
          const snackbar = await this._snackBar.open('Invalid User', "DISMISS", {
            duration: 3000
          });
        }
      }
    ))
    this.subs.add(this.store.select(state=> state.registration.error).subscribe(
      async (data)=>{
        if(data){
          const snackbar = await this._snackBar.open('Invalid Data or user already exits', "DISMISS", {
            duration: 3000
          });
        }
      }
    ))

    this.subs.add(this.store.select(state=> state.login.loading).subscribe(
      (data)=>{
        if(data){
          this.spinner.show();
        }else{
          this.spinner.hide();
        }
      }
    ))
  }
  ngOnDestroy(){
    this.subs.unsubscribe();
  }

}
