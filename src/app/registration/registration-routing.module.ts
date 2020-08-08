import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './page/registration/registration.component';
import { RegistrationFirstContainerComponent } from './Container/registration-first-container/registration-first-container.component';
import { RegistrationSecondContainerComponent } from './Container/registration-second-container/registration-second-container.component';


const routes: Routes = [
  {
    path:'',
    component: RegistrationComponent,
    children: [
      {
        path: '',
        redirectTo: 'registration-part-one',
        pathMatch: 'full'
      },
      {
        path: 'registration-part-one',
        component: RegistrationFirstContainerComponent,
      },
      {
        path: 'registration-part-two',
        component: RegistrationSecondContainerComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
