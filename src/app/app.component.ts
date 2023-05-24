import { Component } from '@angular/core';
import { SecurityService } from './shared/security/security.service';
import { AppUserAuth } from './security/app-user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  securityObject: AppUserAuth = new AppUserAuth();
  constructor(private securityService:SecurityService, private router:Router){
    this.securityObject = securityService.securityObject;
  }
  logout():void{
    this.securityService.logout();
    this.securityObject = this.securityService.securityObject;
    localStorage.removeItem("AuthObject");
    this.router.navigateByUrl('/login');
  }
}
