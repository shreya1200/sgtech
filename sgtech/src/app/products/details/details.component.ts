import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  mySelectedProduct : Data;
  
  constructor(private activatedroute: ActivatedRoute) { }

  
  ngOnInit(): void {
    this.activatedroute.params.subscribe(id => {
      console.log(id);
    });
  }

}
