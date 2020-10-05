import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DetailsComponent } from '../products/details/details.component';
import { ProductsComponent } from '../products/products.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path : 'products/:category/:subcategory', component : ProductsComponent},
  {path : 'details/:id', component : DetailsComponent},
  { path : 'about' ,component : AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
