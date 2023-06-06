import { Routes, RouterModule } from "@angular/router";
import { MediaFormComponent } from "./media-form/media-form.component";
import { MediaListComponent } from "./media-list/media-list.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/guards/auth.guard";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { PopularMovieListComponent } from "./popular-movie-list/popular-movie-list.component";

const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo:'all'},
    {path: 'list', component: MediaListComponent, canActivate:[AuthGuard], data:{claimType:'canAccessMovies'}},
    {path: 'media-form', component: MediaFormComponent, canActivate:[AuthGuard], data:{claimType:'canAccessMovies'}},
    {path: 'feed', component: PopularMovieListComponent},
    {path: 'login', component: LoginComponent},
    {path: 'movie/:id', component: MovieDetailsComponent, canActivate:[AuthGuard], data:{claimType:'canAccessMovies'}}
]; 

export const routing = RouterModule.forRoot(routes);