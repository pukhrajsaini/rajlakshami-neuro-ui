import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticComponent } from './view/static.component';


const routes: Routes = [
  {
    path: '',
    component: StaticComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
