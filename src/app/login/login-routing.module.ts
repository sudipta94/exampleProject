import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { LoginMainContainerComponent } from './Container/login-main-container/login-main-container.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    children: [
      {
        path: '',
        redirectTo: 'login-main',
        pathMatch: 'full'
      },
      {
        path: 'login-main',
        component: LoginMainContainerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
