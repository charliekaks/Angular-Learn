import { Injectable } from '@angular/core';
import { Observable, of, switchAll } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { AppUser } from 'src/app/security/app-user';
import { AppUserAuth } from 'src/app/security/app-user-auth';

const API_ENDPOINT = '/security'
const httpOptions = {
  headers:new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  apiUrl:string = 'http://localhost:3000/api/v1/auth/login'
  securityObject: AppUserAuth = new AppUserAuth();
  constructor(private http: HttpClient) { }
  login(entity:AppUser) : Observable<AppUserAuth> {
    delete entity._id;
    delete entity.userId;
    
    return this.http.post<AppUserAuth>(this.apiUrl,entity,
      httpOptions).pipe(
        tap(resp => {
          this.securityObject.isAuthenticated = true;
          Object.assign(this.securityObject , resp)
        }), 
        catchError(error => {
          console.error('Error occurred during POST request', error);
          // Handle any errors here
          return of(error); // Return an Observable with the error to continue the error flow
        })
      )
  }
  logout() : void{
    this.securityObject.init();
  }
  
}
