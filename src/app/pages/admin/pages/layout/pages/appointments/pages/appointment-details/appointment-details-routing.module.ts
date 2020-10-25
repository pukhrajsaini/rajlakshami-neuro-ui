import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentDetailsComponent } from './view/appointment-details.component';


const routes: Routes = [
  {
    path: '',
    component: AppointmentDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentDetailsRoutingModule { }
