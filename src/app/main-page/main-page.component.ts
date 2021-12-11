import {Component} from "@angular/core";
import {PrimeNGConfig} from "primeng/api";
import { NgForm } from '@angular/forms';
// import {Point} from "../point/point";
import {TablePoint} from "../tablePoint/tablePoint";
import {PointService} from "../point.service";
// import {HttpResponse} from '@angular/common/http';
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


  constructor(
    private primengConfig: PrimeNGConfig,
    private pointService: PointService,
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  loadPoints() {
    // this.pointService.getPoints()
    //   .subscribe((response: HttpResponse<any>)=>{
    //     let data=response
    //
    //     console.log(data);
    //   });
    this.pointService.getPoints().subscribe((data: TablePoint[]) => {
      console.log(data);
      this.pointList = data;
    });
  }


}

function sendData(sendData: any) {
  throw new Error("Function not implemented.");
}

