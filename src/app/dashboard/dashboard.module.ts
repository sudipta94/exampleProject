import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { DashboardMainContainerComponent } from './Container/dashboard-main-container/dashboard-main-container.component';
import { DashboardMainComponent } from './Component/dashboard-main/dashboard-main.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [DashboardComponent,DashboardMainComponent, DashboardMainContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule,
  ]
})
export class DashboardModule { }
