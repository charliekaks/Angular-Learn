import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListComponent } from './media-list/media-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
