import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileService } from '../../services/profile';
import { LOGIN_ROUTE } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(
    private $router: Router,
    private $profile: ProfileService,
  ) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.$handler();
  }
  canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
    return this.$handler();
  }
  private async $handler(): Promise<boolean> {
    if (!this.$profile.isLoaded) {
      await this.$profile.refresh();
    }
    if (!this.$profile.isActive) {
      // redirect to login
      this.$router.navigateByUrl(LOGIN_ROUTE.url, { replaceUrl: true });
    }
    return this.$profile.isActive;
  }
}
