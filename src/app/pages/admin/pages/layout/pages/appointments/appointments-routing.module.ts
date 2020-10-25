import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/appointment-listing/appointment-listing.module').then(m => m.AppointmentListingModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/appointment-details/appointment-details.module').then(m => m.AppointmentDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
