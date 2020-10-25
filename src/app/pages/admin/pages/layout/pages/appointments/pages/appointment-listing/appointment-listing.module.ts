import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentListingRoutingModule } from './appointment-listing-routing.module';
import { AppointmentListingComponent } from './view/appointment-listing.component';
import { TableModule } from '../../../../common/table';
import { AdminSharedModule } from 'src/app/pages/admin/common/admin-shared';


@NgModule({
  declarations: [AppointmentListingComponent],
  imports: [
    CommonModule,
    AppointmentListingRoutingModule,
    TableModule,
    AdminSharedModule
  ]
})
export class AppointmentListingModule { }
