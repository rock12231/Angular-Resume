import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AvinashComponent } from './avinash/avinash.component';

const routes: Routes = [
  {
    path: 'avinash',
    component: AvinashComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


