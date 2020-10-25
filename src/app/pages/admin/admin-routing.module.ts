import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './view/admin.component';
import { PublicGuard } from './guards/public/public.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { LOGIN_ROUTE, PASSWORD_ROUTE } from './constants';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: LOGIN_ROUTE.path,
        loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule)
      },
      {
        path: PASSWORD_ROUTE.path,
        loadChildren: () => import('./pages/password/password.module').then((m) => m.PasswordModule)
      },
      {
        path: '',
        loadChildren: () => import('./pages/layout/layout.module').then((m) => m.LayoutModule)
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
