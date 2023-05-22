import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
  constructor (private securityService:SecurityService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let claimValue : String= route.data['claimType'];
      let isAuth  = this.securityService.securityObject.isAuthenticated;
      let claimStatus = this.securityService.securityObject.getClaimProperty(this.securityService.securityObject,claimValue);
      return isAuth && claimStatus;
  }
  
}
