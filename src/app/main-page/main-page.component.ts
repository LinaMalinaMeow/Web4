import {Component} from "@angular/core";
import {PrimeNGConfig} from "primeng/api";
import {TablePoint} from "../tablePoint/tablePoint";
import {PointService} from "../point.service";
import {ViewChild, ElementRef} from '@angular/core';

/*Decorator*/
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MessageComponent {

  // private point: Point;
  x: number = 2;
  y: number = 2;
  r: number = 1;
  result: string;
  pointList: TablePoint[];

  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl: ElementRef;

  /** Canvas 2d context */
  private context: CanvasRenderingContext2D;
  private dash = 5;
  private step = 50;
  width = 510;
  height = 510;
  private rFor = 3;
  private colorOfFigures = "#853c7f";

  constructor(
    private primengConfig: PrimeNGConfig,
    private pointService: PointService,
  ) {
  }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    this.drawCanvas();
  }

  /**
   * Draws something using the context we obtained earlier on
   */

  private drawCanvas() {
    let valR = 3 * this.step;
    this.drawAXIS()
    this.drawRectangle(valR)
    this.drawTriangle(valR)
    this.drawCircle(valR)
    // drawPoints()
  }

  private drawAXIS() {
    this.context.strokeStyle = 'black';
    this.context.fillStyle = 'black';
    this.context.globalAlpha = 1.0;
    this.context.beginPath();
    this.context.moveTo(this.width / 2, 0);
    this.context.lineTo(this.width / 2, this.height);
    this.context.stroke();
    this.context.beginPath();
    this.context.moveTo(0, this.height / 2);
    this.context.lineTo(this.width, this.height / 2);
    this.context.stroke();
    this.context.strokeText("Y", 240, 10);
    this.context.strokeText("X", 500, this.height / 2 - 10);
    this.context.stroke();
    //draw x-dash
    for (let i = -5; i <= 5; i++) {
      this.context.beginPath();
      let x = this.width / 2 + this.step * i;
      this.context.moveTo(x, this.height / 2 + this.dash);
      this.context.lineTo(x, this.height / 2 - this.dash);
      if (i !== 0) {
        this.context.fillText(i.toString(), x - this.dash / 2, this.height / 2 + 3 * this.dash);
      }
      this.context.stroke();
    }

    //draw y-dash
    for (let i = -5; i <= 5; i++) {
      this.context.beginPath();
      let y = this.height / 2 + this.step * i;
      this.context.moveTo(this.width / 2 + this.dash, y);
      this.context.lineTo(this.width / 2 - this.dash, y);
      if (i !== 0) {
        this.context.fillText((-i).toString(), this.width / 2 + this.dash, y + this.dash);
      }
      this.context.stroke();
    }
  }

  private drawRectangle(valR) {
    this.context.fillStyle = this.colorOfFigures;
    this.context.strokeStyle = this.colorOfFigures;
    this.context.globalAlpha = 0.6;
    this.context.beginPath();
    this.context.fillRect(this.width / 2, this.height / 2, -valR, -valR);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  loadPoints() {
    this.pointService.getPoints().subscribe((data: TablePoint[]) => {
      console.log(data);
      this.pointList = data;
      console.log(this.pointList)
      console.log(this.pointList.length)
    });
  }


  private drawTriangle(valR) {
    this.context.fillStyle = this.colorOfFigures;
    this.context.globalAlpha = 0.6;
    this.context.beginPath();
    this.context.moveTo((this.width / 2) + valR / 2, this.height / 2);
    this.context.lineTo(this.width / 2, (this.height + valR) / 2);
    this.context.lineTo(this.width / 2, this.height / 2);
    this.context.fill();
  }

  private drawCircle(valR) {
    this.context.beginPath();
    this.context.fillStyle = this.colorOfFigures;
    this.context.strokeStyle = this.colorOfFigures;
    this.context.globalAlpha = 0.6;
    this.context.arc(this.width / 2, this.height / 2, valR  , 3*Math.PI/2, 2 * Math.PI);
    this.context.lineTo(this.width / 2, this.height / 2)
    this.context.fill();
    this.context.stroke();
  }
}

function sendData(sendData: any) {
  throw new Error("Function not implemented.");
}

