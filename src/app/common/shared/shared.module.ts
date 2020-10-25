import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InterceptorModule } from '../interceptor';
import { LogoModule } from '../logo';

const Modules = [
  MatButtonModule,
  MatIconModule,
  LogoModule,
  InterceptorModule,
];

@NgModule({
  imports: Modules,
  exports: Modules,
})
export class SharedModule { }
