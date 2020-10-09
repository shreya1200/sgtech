import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  product: Product[];
  category:String;

  constructor(private route: ActivatedRoute,public productService:ProductService,public router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProductsByCategory(params.category,params.subcategory).subscribe((res) =>{
        //console.log(res);
        this.product = res;
        this.category = params.category;
      });
    });

  }

  navigate(category:string,subcategory:string)
  {
    console.log(category+subcategory)
    this.router.navigate(['/products',category,subcategory])
    //console.log(category+subcategory);
  }
}
