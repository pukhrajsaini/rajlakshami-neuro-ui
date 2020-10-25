import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing.component';
import { WEB_ROUTE, ADMIN_ROUTE } from './constants';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: WEB_ROUTE.path,
    loadChildren: () => import('./pages/web/web.module').then(m => m.WebModule)
  },
  {
    path: ADMIN_ROUTE.path,
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: WEB_ROUTE.path,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
