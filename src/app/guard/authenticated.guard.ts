import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../models/appStateModels';
import { take } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthenticatedGuard implements CanActivate {
    haspermision: boolean;
    constructor(private store: Store<AppState>, private router: Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this.store.select(state=> state.login.isLogin).pipe(take(1)).subscribe(
            (isLogin)=>{
               this.haspermision = isLogin
               console.log("call3");
            }
        )
        if(this.haspermision){
        console.log("call1");
        
            return true;
        }else{
            this.router.navigate(['login'], { replaceUrl: true });
            console.log("call2");
            return false;
        }
    }
}

@Injectable({providedIn: 'root'})
export class AuthenticatedLoadGuard implements CanLoad {
    haspermision: boolean;
    constructor(private store: Store<AppState>, private router: Router){}
    canLoad(route: Route) {
        this.store.select(state=> state.login.isLogin).pipe(take(1)).subscribe(
            (isLogin)=>{
               this.haspermision = isLogin
               console.log("call3");
            }
        )
        if(this.haspermision){
        console.log("call1");
        
            return true;
        }else{
            this.router.navigate(['login'], { replaceUrl: true });
            console.log("call2");
            return false;
        }
    }
}