import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './view/layout.component';
import { AdminSharedModule } from '../../common/admin-shared';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoModule } from 'src/app/common/logo';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AdminSharedModule,
    MatToolbarModule,
    LogoModule,
    MatTooltipModule
  ]
})
export class LayoutModule { }
