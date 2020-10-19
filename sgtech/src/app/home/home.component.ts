import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  initial_cust = 0;
  max_cust = 2480;
  initial_invoice = 0;
  max_invoice = 99000;
  initial_cities = 0;
  max_cities = 148;
  initial_products = 0;
  max_products = 98;
  interval;
  constructor(public router:Router) { }


  ngOnInit(): void {
    
  this.interval = setInterval( ()=> {

      if(this.initial_cust <= this.max_cust){
             this.initial_cust+=20;
        } else {
        clearInterval(this.interval)
      }
      }, 100)
  this.interval = setInterval( ()=> {

    if(this.initial_invoice <= this.max_invoice){
           this.initial_invoice+=1000;
      } else {
      clearInterval(this.interval)
    }
    }, 100)
this.interval = setInterval( ()=> {

  if(this.initial_cities <= this.max_cities){
         this.initial_cities+=2;
    } else {
    clearInterval(this.interval)
  }
  }, 100)
this.interval = setInterval( ()=> {

  if(this.initial_products <= this.max_products){
         this.initial_products+=2;
    } else {
    clearInterval(this.interval)
  }
  }, 100);

  
}

  navigate(category:string,subcategory:string)
  {
    console.log(category+subcategory)
    this.router.navigate(['/products',category,subcategory])
    //console.log(category+subcategory);
    
    
  }
}
