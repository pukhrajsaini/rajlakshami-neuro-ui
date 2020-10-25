import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile';
import { LOGIN_ROUTE } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { FieldValidators } from 'src/app/constants';
import { Router } from '@angular/router';

class OtpTimer {
  private timer: NodeJS.Timeout = null;
  private remaining = 59;
  text = '00:59';
  get isExpired(): boolean {
    return this.remaining <= 0;
  }
  constructor(private cb?: () => void) { }
  start(time: number = 59) {
    this.remaining = time;
    this.timer = setInterval(() => {
      const current = --this.remaining;
      this.text = '00:' + ('00' + current).substr(-2);
      if (current <= 0) {
        if (this.cb) {
          this.cb();
        }
        this.stop();
      }
    }, 1000);
  }
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  forgotForm: FormGroup;
  verifyForm: FormGroup;
  resetForm: FormGroup;
  isDone = false;
  isOtpScreen = false;
  isPasswordScreen = false;
  readonly loginUrl: string = LOGIN_ROUTE.url;
  timer = new OtpTimer(() => {
    const { otpCode } = this.verifyForm.controls;
    otpCode.markAsTouched();
    otpCode.setErrors({
      custom: 'Oops! Your OTP is expired now',
    });
  });
  constructor(
    fb: FormBuilder,
    private $router: Router,
    private $profile: ProfileService,
  ) {
    this.forgotForm = fb.group({
      email: ['', [Validators.required, ...FieldValidators.email]],
    });
    this.verifyForm = fb.group({
      token: ['', Validators.required],
      otpCode: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
    const PasswordValidators = [Validators.required, ...FieldValidators.password];
    this.resetForm = fb.group({
      token: ['', Validators.required],
      password: ['', PasswordValidators],
      confirmPassword: ['', PasswordValidators],
    });
    {
      const { token } = this.verifyForm.controls;
      token.valueChanges.subscribe((val) => {
        if (token.enabled) {
          this.isOtpScreen = !!val;
        }
      });
    }
    {
      const { token } = this.resetForm.controls;
      token.valueChanges.subscribe((val) => {
        if (token.enabled) {
          this.isPasswordScreen = !!val;
        }
      });
    }
  }

  ngOnInit(): void {
    // this.timer.start();
  }
  onForgotHandler() {
    if (this.forgotForm.valid && this.forgotForm.enabled) {
      const { email } = this.forgotForm.value;
      this.forgotForm.disable();
      this.$profile.sendOtp(email).then((token: string) => {
        this.verifyForm.setValue({ token, otpCode: '' });
        this.timer.start();
      }).catch(({ error }: HttpErrorResponse) => {
        this.forgotForm.enable();
        this.forgotForm.controls.email.setErrors({ custom: error.message });
      });
    } else if (this.forgotForm.enabled) {
      this.forgotForm.markAllAsTouched();
    }
  }
  onVerifyHandler() {
    if (this.verifyForm.valid && this.verifyForm.enabled) {
      const { token: tok, otpCode } = this.verifyForm.value;
      this.verifyForm.disable();
      this.$profile.verifyOtp(tok, otpCode).then((token: string) => {
        this.resetForm.setValue({ token, password: '', confirmPassword: '' });
      }).catch(({ error }: HttpErrorResponse) => {
        this.verifyForm.enable();
        const { otpCode: control } = this.verifyForm.controls;
        control.setErrors({ custom: error.message });
      });
    } else if (this.verifyForm.enabled) {
      this.verifyForm.markAllAsTouched();
    }
  }
  onResetHandler() {
    if (this.resetForm.valid && this.resetForm.enabled) {
      const { token, password } = this.resetForm.value;
      this.resetForm.disable();
      this.$profile.resetPassword(token, password).then(() => {
        this.isDone = true;
      }).catch(() => {
        this.resetForm.enable();
      });
    } else if (this.resetForm.enabled) {
      this.resetForm.markAllAsTouched();
    }
  }
  onResendHandler() {
    const { token } = this.verifyForm.value;
    if (token) {
      this.$profile.resendOtp(token).then((result: string) => {
        this.verifyForm.setValue({
          token: result,
          otpCode: ''
        });
        this.timer.stop();
        this.timer.start();
      }).catch(() => { });
    }
  }
}
