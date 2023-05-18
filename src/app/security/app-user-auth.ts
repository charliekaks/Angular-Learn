import { UserAuth } from "../shared/security/user-auth";

export class AppUserAuth extends UserAuth{
    canAccessMovies: boolean = false;
    canAddMovies: boolean = false;
    canEditMovies: boolean = false;
    canDeleteMovies: boolean = false;

    override init(): void {
        super.init();
        this.canAccessMovies = false;
        this.canAddMovies = false;
        this.canEditMovies = false;
        this.canDeleteMovies = false;
    }
}