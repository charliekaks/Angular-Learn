import { Component } from '@angular/core';
import { AppUser } from '../security/app-user';
import { AppUserAuth } from '../security/app-user-auth';
import { SecurityService } from '../shared/security/security.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = new AppUserAuth();
  returnUrl: string | undefined;

  constructor(private securityService: SecurityService, private route: ActivatedRoute, private router: Router) {
  }
  ngOnInit() : void{
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl')!;
  }
  login() {
    this.securityObject.init()
    this.securityService.login(this.user)
      .subscribe(resp => {
        localStorage.setItem("AuthObject", JSON.stringify(resp))
        this.securityObject = resp;
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl)
        }
      });
  }
}
