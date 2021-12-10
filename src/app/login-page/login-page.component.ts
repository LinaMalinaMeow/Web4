import {Component} from "@angular/core";
import {PrimeNGConfig} from "primeng/api";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{
  /*error: any;
  username: any;
  password: any;*/


  constructor(
    private primengConfig: PrimeNGConfig,
  ) {}

  ngOnInit(): void {
  }


  /*public auth(username: string, password: string): any {
    this.authorization({username, password});

  }*/

  /*public authorization(obj: any): any {
    this._loginService.authUser(obj).subscribe(
      (res: any) => {
        this._tokenService.saveToken(res.token);
        this._tokenService.saveUser(this.username);
        // @ts-ignore
        saveUserName(this.username);
        this.cleanInputValue();
        this.getMainPage();
      },
      (err: any) => {
        this.error = err._body;
        this.cleanInputValue();
      },
    );
  }*/

  /*public getMainPage() {
    setTimeout(() => this.router.navigate(["/lab4/main"]), 1000);
  }

  public cleanInputValue(): void {
    this.username = '';
    this.password = '';
  }*/
}
