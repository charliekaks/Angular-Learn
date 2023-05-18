export class UserAuth{
    userName: String  = '';
    email: String = '';
    bearerToken: String = '';
    isAuthenticated:Boolean = false;

    init() :void{
        this.userName = "";
        this.email = "";
        this.bearerToken = "";
        this.isAuthenticated = false;
    }
}