import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../services/product.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ProductService]
})
export class DetailsComponent implements OnInit {
  
  myproduct: Product[];
  category:String;
  all_images:String[];
  product: Product;
  all:Product[];
  

  constructor(private route: ActivatedRoute,public productService:ProductService,public router:Router) { }

  
  pdetailsTag:string;
  pfeaturesTag:string;
  selectedImage:String;
  
  ngOnInit(): void {
    
    //service details
    this.route.params.subscribe(params => { 
      
      this.productService.getProductById(params.id).subscribe((res) =>{
        this.product = res;
          //console.log(this.product.keyfeatures);
          //for product details
          //if(this.product.details!=undefined)
          {
            let details = this.product.details.split(";").map(item => item.trim());
            
            this.pdetailsTag = details.join("<br>");
            console.log(this.product.extraimages);

            if(this.product.extraimages!=undefined && this.product.extraimages!="null1" && this.product.extraimages!='null1'){
              this.all_images = this.product.extraimages.split(";").map(item => item.trim());
              this.all_images.push(this.product.image);
            }
            
            this.selectedImage = this.product.image;
            console.log(this.all_images);
          }

          console.log(this.product.productname);
        
      });
    })


    this.route.params.subscribe(params => {
      this.productService.getProducts().subscribe((val) =>{
        //console.log(res);
        this.all = val;
        
      });
    });
    
    
    //carousel
    function scroll_to(clicked_link, nav_height) {
      var element_class = clicked_link.attr('href').replace('#', '.');
      var scroll_to = 0;
      if(element_class != '.top-content') {
        element_class += '-container';
        scroll_to = $(element_class).offset().top - nav_height;
      }
      if($(window).scrollTop() != scroll_to) {
        $('html, body').stop().animate({scrollTop: scroll_to}, 1000);
      }
    }

    //carousel jquery not needed now
    {
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
    }


      //Toggle Click Function
      $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
      });

      //products by category
      this.route.params.subscribe(params => {
        this.productService.getProductsByCategory(params.category,params.subcategory).subscribe((res) =>{
          //console.log(res);
          this.myproduct = res;
          this.category = params.category;
        });
      });

} 
    //navigate function
    navigate(category:string,subcategory:string)
    {
      console.log(category+subcategory)
      this.router.navigate(['/products',category,subcategory])
      //console.log(category+subcategory);
    }

    //Main Image 
    mainImage(ind:String){
      //console.log(ind);
      this.selectedImage = ind;
    }
}