import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './guard/authenticated.guard';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "registration",
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationModule )
  },
  {
    path: "login",
    loadChildren: () => import('./login/login.module').then( m => m.LoginModule )
  },
  {
    path: "dashboard",
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule ),
    canActivate: [AuthenticatedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
