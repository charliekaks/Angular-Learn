import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaFormComponent } from './media-form/media-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListComponent,
    MediaFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
