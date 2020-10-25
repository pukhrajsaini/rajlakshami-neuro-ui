import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/common/shared';

const Modules = [
  SharedModule
];

@NgModule({
  imports: Modules,
  exports: Modules,
})
export class AdminSharedModule { }
