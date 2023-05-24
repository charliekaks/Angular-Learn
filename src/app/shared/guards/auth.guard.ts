import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../security/security.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
  constructor (private securityService:SecurityService, private route: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let claimValue : String= route.data['claimType'];
      let auth = localStorage.getItem("AuthObject");
      if (auth) {
        Object.assign(this.securityService.securityObject, JSON.parse(auth));
      }
      console.log(this.securityService.securityObject);
      let isAuth  = this.securityService.securityObject.isAuthenticated;
      let claimStatus = this.securityService.securityObject.getClaimProperty(this.securityService.securityObject,claimValue);

      if (isAuth && claimStatus) {
        return true;
      } else {
        this.route.navigate(['/login'], {queryParams: {returnUrl:state.url}});
        return false;
      }
  }
  
}
