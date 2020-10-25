import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentListingComponent } from './view/appointment-listing.component';


const routes: Routes = [
  {
    path: '',
    component: AppointmentListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentListingRoutingModule { }
