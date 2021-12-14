import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "./user/user";
import {TablePoint} from "./tablePoint/tablePoint";

@Injectable()
export class UserService {
  private url = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {
  }

  login(user: User): Observable<Object> {
    return this.httpClient.post<String>("http://localhost:8080/authorization", user);
  }
  createUser(user: User): Observable<Object> {
    return this.httpClient.post<String>("http://localhost:8080/registration", user);
  }
}
