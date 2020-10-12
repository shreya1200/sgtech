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
    //carousel
    function scroll_to(clicked_link, nav_height) {
      var element_class = clicked_link.attr('href').replace('#', '.');
      var scroll_to = 0;
      if(element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
      }
      if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 100);
      }
    }


    // jQuery(document).ready(function() {
      
    //   /*
    //     Navigation
    //   */
    //   $('a.scroll-link').on('click', function(e) {
    //     e.preventDefault();
    //     scroll_to($(this), $('nav').outerHeight());
    //   });
      
      
      
    //   /*
    //     Carousel
    //   */
    //   $('#carousel-example').on('slide.bs.carousel', function (e) {

    //     /*
    //       CC 2.0 License Iatek LLC 2018
    //       Attribution required
    //     */
    //     var $e = $(e.relatedTarget);
    //     var idx = (e.target as Element).id.index()
    //     var itemsPerSlide = 5;
    //     var totalItems = $('.carousel-item').length;
        
    //     if (idx >= totalItems-(itemsPerSlide-1)) {
    //       var it = itemsPerSlide - (totalItems - idx);
    //       for (var i=0; i<it; i++) {
    //         // append slides to end
    //         // if (e.direction=="left") {
    //         //   $('.carousel-item').eq(i).appendTo('.carousel-inner');
    //         // }
    //         // else {
    //           $('.carousel-item').eq(0).appendTo('.carousel-inner');
    //         //}
    //       }
    //     }
    //   });
      
    // });


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
