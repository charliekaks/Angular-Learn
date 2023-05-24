export class UserAuth{
    email: String = '';
    bearerToken: String = '';
    isAuthenticated:boolean = false;

    init() :void{
        this.email = "";
        this.bearerToken = "";
        this.isAuthenticated = false;
    }
}