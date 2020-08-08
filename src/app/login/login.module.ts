import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './page/login/login.component';
import { LoginMainContainerComponent } from './Container/login-main-container/login-main-container.component';
import { LoginMainComponent } from './Component/login-main/login-main.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [LoginComponent, LoginMainContainerComponent, LoginMainComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class LoginModule { }
