import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './view/profile.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ContactFormComponent,
  AvailabilityFormComponent,
  ChooseUsFormComponent,
} from './components';
import { AdminSharedModule } from 'src/app/pages/admin/common/admin-shared';

@NgModule({
  declarations: [
    ProfileComponent,
    ContactFormComponent,
    AvailabilityFormComponent,
    ChooseUsFormComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    AdminSharedModule,
  ]
})
export class ProfileModule { }
