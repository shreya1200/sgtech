import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  selectedCategory: Product;
  category: Product[];
  
  readonly baseURL= 'http://localhost:3000/';

  constructor(private http:HttpClient) { }

  //to get all products only testing function
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseURL);
     
  }

  //to get product based on category and subcategory
  getProductsByCategory(category:string,subcategory:string): Observable<Product[]>{
    console.log(this.baseURL,category,subcategory);
    return this.http.get<Product[]>(this.baseURL+'products/'+category+'/'+subcategory);
  }

  //to get specific product to view detail by id
  getProductById(id:string):Observable<Product>
  {
    return this.http.get<Product>(this.baseURL+id);
  }
}
