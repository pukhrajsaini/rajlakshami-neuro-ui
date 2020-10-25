import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ADMIN_ROUTE } from 'src/app/constants';
import { LOGIN_ROUTE } from '../../constants';

type AdminData = any;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  get token(): string {
    return localStorage.getItem(environment.tokenKey) || '';
  }
  set token(val: string) {
    localStorage.setItem(environment.tokenKey, val || '');
  }
  private $isActive = null;
  /**
   * @description A flag to keep status of initial loading of admin
   */
  get isLoaded(): boolean {
    return this.$isActive !== null;
  }
  /**
   * @description A flag to keep login status of admin
   */
  get isActive(): boolean {
    return this.$isActive;
  }
  private $store: ReplaySubject<AdminData> = new ReplaySubject(1);
  readonly changes: Observable<AdminData> = this.$store.pipe(tap((data) => {
    this.$isActive = !!data;
  }));
  constructor(
    private $http: HttpClient,
    private $router: Router
  ) { }
  async refresh() {
    if (!this.token) {
      return this.$store.next(null);
    }
    const headers = {
      Authorization: `Bearer ${this.token}`
    };
    const { result }: any = await this.$http.get('/admins/profile', { headers }).toPromise();
    this.$isActive = true;
    this.$store.next(result);
    console.log(result);
  }
  async login(email: string, password: string): Promise<void> {
    const { result }: any = await this.$http.post('/admins/login', { email, password }).toPromise();
    this.token = result.token;
    this.$store.next(result.profile);
    this.$router.navigateByUrl(ADMIN_ROUTE.url);
  }
  logout() {
    this.token = '';
    this.$store.next(null);
    this.$router.navigateByUrl(LOGIN_ROUTE.url);
  }
  async sendOtp(email: string): Promise<string> {
    const { result }: any = await this.$http.post('/admins/forgot-password', { email }).toPromise();
    return result;
  }
  async resendOtp(token: string): Promise<string> {
    const { result }: any = await this.$http.post('/admins/resend-otp', { token }).toPromise();
    return result;
  }
  async verifyOtp(token: string, otpCode: string): Promise<string> {
    const { result }: any = await this.$http.post('/admins/verify-otp', { token, otpCode }).toPromise();
    return result;
  }
  async resetPassword(token: string, password: string): Promise<void> {
    await this.$http.post('/admins/reset-password', { token, password }).toPromise();
  }
}
