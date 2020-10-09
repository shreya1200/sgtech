import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements AfterViewInit {

  @ViewChild("mycanvas") mycanvas : ElementRef;

  

  constructor() { }

  ngAfterViewInit(): void {
    let canvas : HTMLCanvasElement = this.mycanvas.nativeElement;
    let ctx : CanvasRenderingContext2D = canvas.getContext("2d");
    
    const img = new Image();
    img.onload=this.start(canvas,ctx,img);
    img.src = '../../assets/images/app.png';  
      
  }

  start(canvas:HTMLCanvasElement,ctx:CanvasRenderingContext2D,img):any {
    confetti.create(canvas)({
      shapes: ['square'],
      particleCount: 1000,
      spread: 900,
      origin: {
          y: (1),
          x: (0.5)
      }
      
    });
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    ctx.stroke();
    console.log(img);
  }
}

