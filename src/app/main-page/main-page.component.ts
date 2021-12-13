// Валидация везде
// сделать авторизацию
// обработка ошибок????!
// отрисовка выстрелов

import {Component, ElementRef, ViewChild} from "@angular/core";
import {PrimeNGConfig} from "primeng/api";
import {TablePoint} from "../tablePoint/tablePoint";
import {PointService} from "../point.service";
import * as $ from 'jquery';

/*Decorator*/
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MessageComponent {
  point: TablePoint = new TablePoint();
  // private point: Point;
  // x: number = 2;
  // y: number = 2;
  // r: number = 1;
  // result: string;
  pointList: TablePoint[];
  currentR: number = 4;
  rButtonsMap = new Map().set(-4, "rButton1").set(-3, "rButton2").set(-2, "rButton3").set(-1, "rButton4")
    .set(0, "rButton5").set(1, "rButton6").set(2, "rButton7").set(3, "rButton8").set(4, "rButton9")
  xButtonsMap = new Map().set(-4, "xButton1").set(-3, "xButton2").set(-2, "xButton3").set(-1, "xButton4")
    .set(0, "xButton5").set(1, "xButton6").set(2, "xButton7").set(3, "xButton8").set(4, "xButton9")
  /** Template reference to the canvas element */
  @ViewChild('canvasEl') canvasEl: ElementRef;

  /** Canvas 2d context */
  private context: CanvasRenderingContext2D;
  private dash = 5;
  private step = 50;
  width = 510;
  height = 510;
  private colorOfFigures = "#853c7f";

  constructor(
    private primengConfig: PrimeNGConfig,
    private pointService: PointService,
  ) {
  }

  ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.drawCanvas();
    this.loadPoints();
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  onSubmit() {
    console.log(this.point);
    this.savePoint();
  }

  savePoint() {
    this.pointService.createPoint(this.point).subscribe(data => {
        this.loadPoints();
      },
      error => console.log(error));
  }

  addPoint() {
    console.log($('#x').val())
    // console.log($('#yField').val())
    // $('#y').val($('#yField').val())
    // @ts-ignore
    this.point.x=$('#x').val();
    // @ts-ignore
    this.point.y=$('#y').val();
    this.point.r=this.getCurrentR();
    // $('#y input[type=hidden]').val($('#yField').val());
    console.log($('#y').val())
    $('#r').val(this.getCurrentR());
    console.log($('#r').val())
    $('#submitButton').click();
    this.point = new TablePoint();
  }
  setY(event){
    $('#y').val(event.target.value)
  }
  loadPoints() {
    this.pointService.getPoints().subscribe((data: TablePoint[]) => {
      this.pointList = data;
      if (this.pointList.length != 0) {
        for (let i = 0; i < this.pointList.length; i++) {
          this.drawShoot(this.pointList[i].x, this.pointList[i].y, this.pointList[i].r);
        }
      } else {
      }
    });
  }

  getCurrentR() {
    return this.currentR;
  }

  clearPoints() {
    this.clearCanvas()
    this.pointService.clearPoints().subscribe((data: TablePoint[]) => {
      this.pointList = data;
    });
    if (this.getCurrentR() >= 0) {
      this.drawCanvas();
    } else {
      this.drawReverseCanvas()
    }
  }

  clearCanvas() {
    this.context.save();
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.restore();
  }

  onClickX(button, val) {
    $('#x').val(val);
    $('.input_form_button_x').removeClass('button_x_clicked');
    let id = "#" + this.xButtonsMap.get(val);
    $(id).addClass("button_x_clicked");
  }

  onChangeY() {
    $('#y').val($('#yField').val());
  }

  onClickR(button, val) {
    // @ts-ignore
    this.currentR = val;
    $('.input_form_button_r').removeClass('button_r_clicked');
    let id = "#" + this.rButtonsMap.get(val);
    $(id).addClass("button_r_clicked");
    this.clearCanvas();
    if (this.getCurrentR() >= 0) {
      this.drawCanvas();
    } else {
      this.drawReverseCanvas()
    }
    if (this.pointList.length != 0) {
      for (let i = 0; i < this.pointList.length; i++) {
        this.drawShoot(this.pointList[i].x, this.pointList[i].y, this.pointList[i].r);
      }
    }
  }

  /**
   * Draws something using the context we obtained earlier on
   */
  private drawCanvas() {
    let valR = this.getCurrentR() * this.step;
    this.drawAXIS()
    this.drawRectangle(valR)
    this.drawTriangle(valR)
    this.drawCircle(valR)
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
    this.context.arc(this.width / 2, this.height / 2, valR, 3 * Math.PI / 2, 2 * Math.PI);
    this.context.lineTo(this.width / 2, this.height / 2)
    this.context.fill();
    this.context.stroke();
  }

  public clickOnChart(canvas, event) {
    let rect = (this.canvasEl.nativeElement as HTMLCanvasElement).getBoundingClientRect();
    let width = this.width;
    let height = this.height;
    let x = (event.clientX - rect.left - width / 2) / this.step;
    let y = (height / 2 - event.clientY + rect.top) / this.step;
    console.log("x=" + x.toFixed(2).replace(".00", ""));
    console.log("y=" + y.toFixed(2).replace(".00", ""));
    // $('#x').val(x.toFixed(2).replace(".00", ""));
    // @ts-ignore
    this.point.x = x.toFixed(2).replace(".00", "");
    // $('#y').val(y.toFixed(2).replace(".00", ""));
    // @ts-ignore
    this.point.y = y.toFixed(2).replace(".00", "")
    // $('#r').val(this.getCurrentR());
    // @ts-ignore
    this.point.r = this.getCurrentR();
    $('#submitButton').click();
    this.point = new TablePoint();
  }


  private drawReverseCanvas() {
    let valR = Math.abs(this.getCurrentR()) * this.step;
    this.drawAXIS()
    this.drawReverseRectangle(valR)
    this.drawReverseTriangle(valR)
    this.drawReverseCircle(valR)
    // drawPoints()
  }

  private drawReverseRectangle(valR) {
    this.context.fillStyle = this.colorOfFigures;
    this.context.strokeStyle = this.colorOfFigures;
    this.context.globalAlpha = 0.6;
    this.context.beginPath();
    this.context.fillRect(this.width / 2, this.height / 2, valR, -valR);
  }

  private drawReverseTriangle(valR) {
    this.context.fillStyle = this.colorOfFigures;
    this.context.globalAlpha = 0.6;
    this.context.beginPath();
    this.context.moveTo((this.width / 2) - valR / 2, this.height / 2);
    this.context.lineTo(this.width / 2, (this.height + valR) / 2);
    this.context.lineTo(this.width / 2, this.height / 2);
    this.context.fill();
  }

  private drawReverseCircle(valR) {
    this.context.beginPath();
    this.context.fillStyle = this.colorOfFigures;
    this.context.strokeStyle = this.colorOfFigures;
    this.context.globalAlpha = 0.6;
    this.context.arc(this.width / 2, this.height / 2, valR, Math.PI, 3 * Math.PI / 2);
    this.context.lineTo(this.width / 2, this.height / 2)
    this.context.fill();
    this.context.stroke();
  }

  drawShoot(x, y, r) {
    let color;
    if (this.checkArea(x, y, r) === 'Да') {
      color = 'green';
    } else {
      color = 'red';
    }
    this.context.beginPath();
    this.context.arc(this.width / 2 + x * this.step, this.height / 2 - y * this.step, this.dash, 0, Math.PI * 2);
    this.context.fillStyle = color;
    this.context.strokeStyle = color;
    this.context.globalAlpha = 0.45;
    this.context.fill();
    this.context.stroke();
  }

  private checkArea(x, y, r) {
    return "Да";
  }
}
