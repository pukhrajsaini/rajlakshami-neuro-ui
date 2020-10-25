import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './view/login.component';
import { PublicModule } from '../../common/public';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from 'src/app/common/validation';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PublicModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationModule
  ]
})
export class LoginModule { }
