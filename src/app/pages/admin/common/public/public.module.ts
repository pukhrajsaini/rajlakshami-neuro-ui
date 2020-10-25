import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './view/public.component';
import { AdminSharedModule } from '../admin-shared/admin-shared.module';
import { LogoModule } from 'src/app/common/logo';


@NgModule({
  declarations: [PublicComponent],
  imports: [
    CommonModule,
    AdminSharedModule,
    LogoModule
  ],
  exports: [
    PublicComponent,
    AdminSharedModule,
  ]
})
export class PublicModule { }
