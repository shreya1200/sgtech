import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  product: Product[];
  category:String;
  all:Product[];
  //firstproduct:Product;
  constructor(private route: ActivatedRoute,public productService:ProductService,public router:Router) { }

  ngOnInit(): void {
    //scroll to top
    $(document).ready(function(){
      $(document).scrollTop(0);
    })    

    $('.butt').click(function(){
      console.log('HI')
      $(document).scrollTop(0) // any value you need
    });
    
    //Toggle Click Function
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    this.route.params.subscribe(params => {
      this.productService.getProductsByCategory(params.category,params.subcategory).subscribe((res) =>{
        //console.log(res);
        this.product = res;
        this.category = params.category;
      });
    });
    this.route.params.subscribe(params => {
      this.productService.getProducts().subscribe((val) =>{
        //console.log(res);
        this.all = val;
        
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
