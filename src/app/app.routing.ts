import { Routes, RouterModule } from "@angular/router";
import { MediaFormComponent } from "./media-form/media-form.component";
import { MediaListComponent } from "./media-list/media-list.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./shared/guards/auth.guard";

const routes: Routes = [
    {path: 'list', component: MediaListComponent, canActivate:[AuthGuard], data:{claimType:'canAccessMovies'}},
    {path: 'media-form', component: MediaFormComponent, canActivate:[AuthGuard], data:{claimType:'canAccessMovies'}},
    {path: 'login', component: LoginComponent},
    {path: '', pathMatch:'full', redirectTo:'all'}
];

export const routing = RouterModule.forRoot(routes);