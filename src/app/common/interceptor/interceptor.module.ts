import { NgModule } from '@angular/core';
import { InterceptorService } from './interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  imports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
})
export class InterceptorModule { }
