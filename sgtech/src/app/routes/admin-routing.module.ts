import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../../app/signIn-opt/login/login.component';
import { RegisterComponent } from '../../app/signIn-opt/register/register.component';
import { ProductListComponent } from '../products/product-list/product-list.component';
import { DetailsComponent } from '../products/details/details.component';
import { ProductsComponent } from '../products/products.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : 'signIn', component : LoginComponent},
  {path : 'signUp', component : RegisterComponent},
  {path : 'products', component : ProductsComponent},
  {path : 'details/:id', component : DetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
