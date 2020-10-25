import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { SharedModule } from '../../common/shared';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { SliderModule } from 'src/app/common/slider';

import { StaticComponent } from './view/static.component';

import {
  BannerComponent,
  AboutUsComponent,
  WhyUsComponent,
  ContactUsComponent,
  AppointmentFormComponent,
  AboutDoctorComponent,
  AboutServicesComponent,
  AboutTreatmentsComponent,
  AboutSocialWorkComponent,
  AboutAchievmentsComponent,
} from './components';
import { PlaylistComponent } from './components/playlist/playlist.component';

@NgModule({
  declarations: [
    StaticComponent,
    BannerComponent,
    AboutUsComponent,
    WhyUsComponent,
    ContactUsComponent,
    AppointmentFormComponent,
    AboutDoctorComponent,
    AboutServicesComponent,
    AboutTreatmentsComponent,
    AboutSocialWorkComponent,
    AboutAchievmentsComponent,
    PlaylistComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatStepperModule,
    MatExpansionModule,
    ReactiveFormsModule,
    SliderModule
  ],
  entryComponents: [
    AboutDoctorComponent,
    AboutServicesComponent,
    AboutTreatmentsComponent,
    AboutSocialWorkComponent,
    AboutAchievmentsComponent,
  ],
  providers: []
})
export class WebModule {
  constructor() {
    // youtube.playlist().then((resp) => {
    //   console.log(resp);
    // }).catch(console.log);
  }
}
