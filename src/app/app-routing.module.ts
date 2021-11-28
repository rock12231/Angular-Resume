import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvinashComponent } from './avinash/avinash.component';

const routes: Routes = [
  { path: 'one', component: AvinashComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


