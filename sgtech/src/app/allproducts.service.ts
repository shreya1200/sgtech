import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './products/data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  productsUrl = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Data[]> {
    return this.http.get<Data[]>(this.productsUrl);
  }
}
