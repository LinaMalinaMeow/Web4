import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TablePoint} from "./tablePoint/tablePoint";
import {AuthService} from "./auth.service";

@Injectable()
export class PointService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient, private auth: AuthService) {
  }

  getPoints(): Observable<TablePoint[]> {
    return this.httpClient.get<TablePoint[]>(`${this.url + "/getPoints/" + this.auth.getId()}`);
  }

  clearPoints(): Observable<TablePoint[]> {
    return this.httpClient.get<TablePoint[]>(`${this.url + "/clearPoints/" + this.auth.getId()}`);
  }

  createPoint(point: TablePoint): Observable<Object> {
    return this.httpClient.post(`${this.url + "/addPoint/" + this.auth.getId()}`, point);
  }
}
