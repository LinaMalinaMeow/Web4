import {Injectable} from "@angular/core";
import {TablePoint} from "../tablePoint/tablePoint";

@Injectable()
export class AuthService {
  private url = 'http://localhost:10821';

  // getPoints() {
  //   return this.http.get<TablePoint[]>(this.url+'/points');
  // }
}
