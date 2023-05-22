export class UserAuth{
    userName: String  = '';
    email: String = '';
    bearerToken: String = '';
    isAuthenticated:boolean = false;

    init() :void{
        this.userName = "";
        this.email = "";
        this.bearerToken = "";
        this.isAuthenticated = false;
    }
}