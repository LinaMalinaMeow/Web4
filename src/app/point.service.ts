import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TablePoint} from "./tablePoint/tablePoint";

@Injectable()
export class PointService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  getPoints(): Observable<TablePoint[]> {
    return this.httpClient.get<TablePoint[]>(`${this.url + "/getPoints"}`);
  }

  clearPoints(): Observable<TablePoint[]> {
    return this.httpClient.get<TablePoint[]>(`${this.url + "/clearPoints"}`);
  }

  createPoint(point: TablePoint): Observable<Object> {
    return this.httpClient.post(`${this.url + "/addPoint"}`, point);
  }
}
