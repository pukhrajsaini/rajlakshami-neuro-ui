import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ProfileService } from '../../services/profile';
import { ADMIN_ROUTE } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate, CanLoad {
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
    if (this.$profile.isActive) {
      // redirect to dashboard
      this.$router.navigateByUrl(ADMIN_ROUTE.url, { replaceUrl: true });
    }
    return !this.$profile.isActive;
  }
}
