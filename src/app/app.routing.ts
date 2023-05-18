import { Routes, RouterModule } from "@angular/router";
import { MediaFormComponent } from "./media-form/media-form.component";
import { MediaListComponent } from "./media-list/media-list.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {path: 'list', component: MediaListComponent},
    {path: 'media-form', component: MediaFormComponent},
    {path: 'login', component: LoginComponent},
    {path: '', pathMatch:'full', redirectTo:'all'}
];

export const routing = RouterModule.forRoot(routes);