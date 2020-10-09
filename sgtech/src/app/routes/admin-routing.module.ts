import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { DetailsComponent } from '../products/details/details.component';
import { ProductsComponent } from '../products/products.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { AppPageComponent } from '../app-page/app-page.component';

const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'products/:category/:subcategory', component : ProductsComponent},
  { path : 'details/:id', component : DetailsComponent},
  { path : 'about' ,component : AboutComponent},
  { path : 'contact' ,component : ContactComponent},
  { path : 'app' ,component : AppPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
