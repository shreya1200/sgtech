import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.model';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  all:Product[];
  constructor(private route: ActivatedRoute,public productService:ProductService,public router:Router) {  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProducts().subscribe((val) =>{
        //console.log(res);
        this.all = val;
        
      });
    });

// $('.carousel .carousel-item').each(function(){
//       var minPerSlide = 3;
//       var next = $(this).next();
//       if (!next.length) {
//       next = $(this).siblings(':first');
//       }
//       next.children(':first-child').clone().appendTo($(this));
      
//       for (var i=0;i<minPerSlide;i++) {
//           next=next.next();
//           if (!next.length) {
//             next = $(this).siblings(':first');
//           }
          
//           next.children(':first-child').clone().appendTo($(this));
//         }
//     });
  }

}
