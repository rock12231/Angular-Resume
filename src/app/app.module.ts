import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvinashComponent } from './avinash/avinash.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AuthComponent } from './auth/auth.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { GoogleAuthComponent } from './google-auth/google-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AvinashComponent,
    AuthComponent,
    GoogleAuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
