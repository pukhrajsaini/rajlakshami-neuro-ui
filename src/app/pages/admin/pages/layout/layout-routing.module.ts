import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './view/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'appointments',
        loadChildren: () => import('./pages/appointments/appointments.module').then(m => m.AppointmentsModule)
      },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
