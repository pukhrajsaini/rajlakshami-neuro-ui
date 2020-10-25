import { NgModule } from '@angular/core';
import { ValidatePipe } from './validate.pipe';

@NgModule({
  declarations: [ValidatePipe],
  exports: [ValidatePipe],
})
export class ValidationModule { }
