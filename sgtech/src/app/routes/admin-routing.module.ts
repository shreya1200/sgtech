import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../../app/signIn-opt/login/login.component';
import { RegisterComponent } from '../../app/signIn-opt/register/register.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'signIn', component : LoginComponent},
  {path : 'signUp', component : RegisterComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
