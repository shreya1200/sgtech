import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  initial_cust = 0;
  max_cust = 2400;
  initial_invoice = 0;
  max_invoice = 95000;
  initial_cities = 0;
  max_cities = 95;
  initial_products = 0;
  max_products = 45;
  interval;
  constructor() { }

  ngOnInit(): void {
    this.interval = setInterval( ()=> {

      if(this.initial_cust <= this.max_cust){
             this.initial_cust+=100;
        } else {
        clearInterval(this.interval)
      }
      }, 100)
  this.interval = setInterval( ()=> {

    if(this.initial_invoice <= this.max_invoice){
           this.initial_invoice+=5000;
      } else {
      clearInterval(this.interval)
    }
    }, 100)
this.interval = setInterval( ()=> {

  if(this.initial_cities <= this.max_cities){
         this.initial_cities+=5;
    } else {
    clearInterval(this.interval)
  }
  }, 100)
this.interval = setInterval( ()=> {

  if(this.initial_products <= this.max_products){
         this.initial_products+=5;
    } else {
    clearInterval(this.interval)
  }
  }, 100)
}
}
