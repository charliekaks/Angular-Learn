import { Routes, RouterModule } from "@angular/router";
import { MediaFormComponent } from "./media-form/media-form.component";
import { MediaListComponent } from "./media-list/media-list.component";

const routes: Routes = [
    {path: 'list', component: MediaListComponent},
    {path: 'mediaForm', component: MediaFormComponent},
    {path: '', pathMatch:'full', redirectTo:'all'}
];

export const routing = RouterModule.forRoot(routes);