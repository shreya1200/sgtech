import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ProductService]
})
export class DetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute,public productService:ProductService) { }

  product: Product;
  pdetailsTag:string;
  pfeaturesTag:string;
  
  ngOnInit(): void {
    this.route.params.subscribe(params => { 
      
      this.productService.getProductById(params.id).subscribe((res) =>{
        this.product = res;
        console.log(this.product.keyfeatures);
        //for product details
          //if(this.product.details!=undefined)
          {
            let details = this.product.details.split(";").map(item => item.trim());
            this.pdetailsTag = details.join("<br>");
          }

        
      });
    })
  }

}
