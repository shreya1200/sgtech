import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productItem: Data;
  
  constructor(private msg:MessengerService) { }

  ngOnInit(): void { }

  onSelect(){
    this.msg.sendMsg(this.productItem);
  }

  

}
