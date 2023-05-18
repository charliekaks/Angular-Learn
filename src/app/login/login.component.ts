import { Component } from '@angular/core';
import { AppUser } from '../security/app-user';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../shared/security/security.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : AppUser = new AppUser();
  securityObject: AppUserAuth = new AppUserAuth();

  constructor(private securityService: SecurityService){
  }

  login(){
    this.securityObject.init()
    this.securityService.login(this.user)
      .subscribe(resp => this.securityObject = resp);
  }
}
