import {Component} from "@angular/core";
import {PrimeNGConfig} from "primeng/api";
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
// import { FormControl, Validators } from "@angular/forms";
// import { Router } from "@angular/router";
// import { getUserName } from "../model/logic";
// import { TokenService } from "../../services/token-service.service";
// import { GetPointsService } from './main-page-service/get-points.service';
// import { Component, OnInit } from '@angular/core';
// import * as types from './types/types';
// import { HttpErrorResponse } from '@angular/common/http';
// import { CheckPointService } from './main-page-service/check-point.service';
// import { DeleteAllPointsService } from "./main-page-service/delete-all-points.service";
// import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MessageComponent {
  // public parameter: number;
  // private tablePoints: any;
  // public loginName: any;
  // public xPoint: number;
  // public yPoint: number;
  // rateControl = new FormControl('', [Validators.max(3), Validators.min(-3)])

  constructor(
    // private _dropAll: DeleteAllPointsService,
    // private _tokenService: TokenService,
    // private _getPointService: GetPointsService,
    // private _checkPointService: CheckPointService,
    // private _router: Router,
    private primengConfig: PrimeNGConfig,
    // parameter = 2,
    // xPoint = 0,
    // yPoint = 0)
  ){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  //
  // Info() {
  // public
  //   parameter: number;
  // private
  //   tablePoints: any;
  // public
  //   loginName: any;
  // public
  //   xPoint: number;
  // public
  //   yPoint: number;
  //   rateControl = new FormControl('', [Validators.max(3), Validators.min(-3)])
  // }
  //
  // constructor(private _dropAll: DeleteAllPointsService, private _tokenService: TokenService, private _getPointService: GetPointsService, private _checkPointService: CheckPointService, private _router: Router) {
//   this.parameter = 2;
//   this.xPoint = 0;
//   this.yPoint = 0;
// }
  //
  // ngOnInit(): void {
  //   this.getUserPoints();
  //   this.loginName = getUserName() ? getUserName() : this._tokenService.getUser();
  //   setTimeout(() => {
  //     this.draw(this.parameter);
  //   }, 100);
  // }
  //
  // public getUserPoints() {
  //   this._getPointService.getPoints().subscribe((res: any) => this.tablePoints = res,
  //     (err: HttpErrorResponse) => console.log(err),
  //   )
  // }
  //
  // public getParameter() { return this.parameter }
  //
  // public logout() {
  //   this._router.navigate(["/lab4/login"]);
  //   this._tokenService.signOut();
  // }
  //
  // public checkPoint(data: types.sendPoint): void {
  //   let variableY;
  //   // @ts-ignore
  //   if (typeof data.y == "undefined") variableY = this.yPoint;
  //   else variableY = data.y;
  //   const sendData = { x: data.x, y: variableY, r: data.r, userName: this.loginName }

  // this._checkPointService.checkPoints(sendData).subscribe((res: any) => res,
  //   (err: HttpErrorResponse) => console.log(err),
  // )
  //   setTimeout(() => this.getUserPoints(), 100)
  //   setTimeout(() => {this.draw(this.parameter)}, 200);
}


function sendData(sendData: any) {
  throw new Error("Function not implemented.");
}

// public deleteAllPoints() {
//   this._dropAll.dropAllPoints().subscribe((res: any) => res,
//     (err: HttpErrorResponse) => console.log(err),
//   )
//   this.tablePoints = [];
//   setTimeout(() => {
//     this.draw(this.parameter);
//     this.draw(this.parameter);
//   }, 100);
// }
//
// public getTablePoints(): any { return this.tablePoints }
//
// public sendPoint(event: any){
//   const X = (event.offsetX - 200) / 80;
//   const Y = (event.offsetY - 200) / -80;
//   const data = {
//     x: X,
//     y: Y,
//     r: this.parameter
//   };
//   this.checkPoint(data);
// }

// draw(parameter: any = 0) {
//   const CANVAS_WIDTH = 400;
//   const CANVAS_HEIGHT = 400;
//   const canvas = document.getElementById('canvas');
//   // @ts-ignore
//   if (canvas.getContext){
//     // @ts-ignore
//     const ctx = canvas.getContext('2d');
//     ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
//
//     ctx.fillStyle = "rgba(256, 256, 256)"; // background fill
//     ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
//
//     ctx.fillStyle = 'rgb(35, 184, 253)'; //area
//     ctx.fillRect(200, 200, parameter * 40, parameter * 80); // rectangle
//     ctx.fill();
//
//     ctx.beginPath();
//     ctx.lineTo(200, 200 - parameter * 20); // quarter of circle
//     if (parameter > 0) ctx.arc(200,200, Math.abs(parameter * 40), Math.PI/2, Math.PI, false);
//     else ctx.arc(200,200, Math.abs(parameter * 40), Math.PI * 3 / 2, 0, false);
//     ctx.lineTo(200,200);
//     ctx.closePath();
//     ctx.fill();
//
//     ctx.beginPath();
//     ctx.moveTo(200 - parameter * 40, 200); // triangle
//     ctx.lineTo(200, 200 - parameter * 80);
//     ctx.lineTo(200,200);
//       ctx.closePath();
//       ctx.fill();
//
//       for (let x = 40; x < 361; x += 40) { // gird
//         ctx.moveTo(x, 0);
//         ctx.lineTo(x, 400);
//       }
//       for (let y = 40; y < 361; y += 40) {
//         ctx.moveTo(0, y);
//         ctx.lineTo(400, y);
//       }
//       ctx.strokeStyle = "#333";
//       ctx.stroke();
//
//       ctx.fillStyle = 'black'; // axis
//       ctx.lineWidth = 2;
//       ctx.beginPath();
//       ctx.moveTo(0,200);
//       ctx.lineTo(400,200);
//       ctx.moveTo(200,0);
//       ctx.lineTo(200,400);
//       ctx.moveTo(194,20); // arrows at the ends of axis
//       ctx.lineTo(200,0);
//       ctx.lineTo(206,20);
//       ctx.moveTo(380,194);
//       ctx.lineTo(400,200);
//       ctx.lineTo(380,206);
//       ctx.stroke();
//       ctx.fill();
//
//       ctx.font = "18px Arial"; // names of axis & coordinates
//       ctx.fillText("X", 385, 188);
//       ctx.fillText("Y", 208, 18);
//       ctx.fillText("0", 202, 198);
//       if (Math.abs(parameter) >= 1) { // drawing coordinates of r more or equals to them
//         ctx.fillText("1", 282, 198);
//         ctx.fillText("1", 202, 116);
//         ctx.fillText("-1", 122, 198);
//         ctx.fillText("-1", 202, 276);
//       }
//       if (Math.abs(parameter) >= 2) {
//         ctx.fillText("2", 362, 198);
//         ctx.fillText("2", 202, 38);
//         ctx.fillText("-2", 42, 198);
//         ctx.fillText("-2", 202, 356);
//       }
//       ctx.closePath();
//
//       this.getTablePoints().forEach((element: any) => { // drawing dots
//         let x = element.x;
//         let y = element.y;
//         let result = this.check(x, y, parameter);
//         if (result !== "") {
//           result === 'true' ? ctx.fillStyle = 'green' : ctx.fillStyle = 'red';
//           ctx.beginPath();
//           ctx.arc(200 + 80 * x, 200 - 80 * y, 6, 0, 2 * Math.PI);
//           ctx.fill();
//         }
//       })
//     }
//   }
//
//   check(x: number, y: number, r: number) : string {
//     let income = "false";
//     if (r >= 0) { // checking for positive parameter
//       if (y > 0){
//         if ((y <= 2 * x + r) && (x <= 0)) income = "true"; // triangle
//       } else {
//         if ((x >= 0) && (x <= r/2) && (y >= -r)) income = "true"; // rectangle
//         if ((x < 0) && (x * x + y * y <= r * r / 4)) income = "true"; // circle
//       }
//     } else { // checking for negative parameter
//       if (y >= 0){
//         if ((x > 0) && (x * x + y * y <= r * r / 4)) income = "true"; // circle
//         if ((x <= 0) && (x >= r/2) && (y <= Math.abs(r))) income = "true" // rectangle
//       }
//       else if ((y >= 2 * x + r) && (x >= 0)) income = "true"; // triangle
//     }
//     return income;
//   }
// }
