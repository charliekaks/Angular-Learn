import { Injectable } from '@angular/core';
import { Observable, of, switchAll } from 'rxjs';
import { AppUser } from 'src/app/security/app-user';
import { AppUserAuth } from 'src/app/security/app-user-auth';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor() { }
  login(entity:AppUser) : Observable<AppUserAuth> {
    this.securityObject.email = entity.email;
    this.securityObject.userName = entity.userName;
    

    switch (entity.email.toLowerCase()) {
      case "charles@ch.com":
        this.securityObject.isAuthenticated = true;
        this.securityObject.canAccessMovies = true;
        this.securityObject.canAddMovies = true;
        this.securityObject.canEditMovies = true;
        break;
      case "kevin@ch.com":
        this.securityObject.isAuthenticated = true;
        break;
    
      default:
        this.securityObject.userName = "Invalid Username or password"
        break;
    }
    return of(this.securityObject);
  }
  logout() : void{
    this.securityObject.init();
  }
  
}
