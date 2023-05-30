import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppUserAuth } from "src/app/security/app-user-auth";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(){
    }
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            let auth: AppUserAuth = new AppUserAuth(); 
            let value = localStorage.getItem("AuthObject");
            if (value) {
                auth = JSON.parse(value);
            }
            console.log("Got here 1")
            if (auth) {
              
                const authReq = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer ' + auth.bearerToken)
                });
                return next.handle(authReq);
            }else {
                console.log("Got here 2")
                return next.handle(req)
            }
     }
}