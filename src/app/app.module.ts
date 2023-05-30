import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaFormComponent } from './media-form/media-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpInterceptorProviders } from './shared/http-intercepters/interceptor-providers';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaListComponent,
    MediaFormComponent,
    LoginComponent,
    RegisterComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    routing
  ],
  providers: [  HttpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }
