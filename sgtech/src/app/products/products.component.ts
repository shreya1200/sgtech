import { Component, OnInit } from '@angular/core';
import { Data } from '../products/data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  
  data: Data[] = [
    {id:"abc123", productname:"abc", description:"abc", price:123, image:'abc'},
    {id:"qwe123", productname:"qwe", description:"qwe", price:123, image:'abc'},
    {id:"asd123", productname:"asd", description:"asd", price:123, image:'abc'},
    {id:"zxc123", productname:"zxc", description:"zxc", price:123, image:'abc'},
    {id:"bnm123", productname:"bnm", description:"bnm", price:123, image:'abc'},
    {id:"jkl123", productname:"jkl", description:"jkl", price:123, image:'abc'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
