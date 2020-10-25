import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/pages/admin/services/profile';
import { HttpErrorResponse } from '@angular/common/http';
import { PASSWORD_ROUTE } from '../../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isPasswordShown = false;
  loginForm: FormGroup;
  readonly passwordUrl: string = PASSWORD_ROUTE.url;
  constructor(fb: FormBuilder, private $profile: ProfileService) {
    this.loginForm = fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  onSubmitHandler() {
    if (this.loginForm.valid && this.loginForm.enabled) {
      const { value } = this.loginForm;
      this.loginForm.disable();
      this.$profile.login(value.email, value.password).catch(({ error }: HttpErrorResponse) => {
        console.log(error);
        this.loginForm.enable();
        const code = error.errorCode;
        const { email, password } = this.loginForm.controls;
        if (code === 4011) {
          email.setErrors({ custom: error.message });
        } else if (code === 4012) {
          password.setErrors({ custom: error.message });
        }
      });
    } else if (this.loginForm.enabled) {
      this.loginForm.markAllAsTouched();
    }
  }
}
