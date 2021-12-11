import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TablePoint} from "./tablePoint/tablePoint";

@Injectable ()
export class PointService {
  private url="http://localhost:8080/points";
  constructor(private httpClient: HttpClient) {
  }
  // getPoints(){
  //   return this.httpClient.get(this.url);
  // }
  getPoints(): Observable<TablePoint[]>{
    return this.httpClient.get<TablePoint[]>(`${this.url}`);
  }
}