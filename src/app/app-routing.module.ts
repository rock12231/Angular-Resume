import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AvinashComponent } from './avinash/avinash.component';
import { GoogleAuthComponent } from './google-auth/google-auth.component';

const routes: Routes = [
  {
    path: 'avinash',
    component: AvinashComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'googleauth',
    component: GoogleAuthComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


