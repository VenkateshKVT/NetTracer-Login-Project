import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ApplicationDashboardComponent } from './application-dashboard/application-dashboard.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([])
  ]
})
export class AppRoutingModule { }

export const ROUTES: Routes = [
  {
    path: 'applicationDashboard',
    component: ApplicationDashboardComponent
  }
]
