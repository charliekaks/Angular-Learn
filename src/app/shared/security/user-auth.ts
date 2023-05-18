export class UserAuth{
    userName: String  = '';
    bearerToken: String = '';
    isAuthenticated:Boolean = false;

    init() :void{
        this.userName = "";
        this.bearerToken = "";
        this.isAuthenticated = false;
    }
}