import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './view/password.component';

import { PublicModule } from '../../common/public';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationModule } from 'src/app/common/validation';


@NgModule({
  declarations: [PasswordComponent],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    PublicModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ValidationModule
  ]
})
export class PasswordModule { }
