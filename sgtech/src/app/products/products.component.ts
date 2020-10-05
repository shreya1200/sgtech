import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../services/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  product: Product[];
  category:String;

  constructor(private route: ActivatedRoute,public productService:ProductService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProductsByCategory(params.category,params.subcategory).subscribe((res) =>{
        //console.log(res);
        this.product = res;
        this.category = params.category;
      });
    });

  }

  navigate(id: string)
  {
    console.log(id);
  }
}
