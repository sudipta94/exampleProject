import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './page/registration/registration.component';
import { RegistrationFirstContainerComponent } from './Container/registration-first-container/registration-first-container.component';
import { RegistrationSecondContainerComponent } from './Container/registration-second-container/registration-second-container.component';
import { RegistrationSecondComponent } from './Component/registration-second/registration-second.component';
import { RegistrationFirstComponent } from './Component/registration-first/registration-first.component';
import { MatFormFieldModule, MatInputModule, MatBottomSheetModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [RegistrationComponent, RegistrationFirstContainerComponent, RegistrationSecondContainerComponent, RegistrationSecondComponent, RegistrationFirstComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class RegistrationModule { }
