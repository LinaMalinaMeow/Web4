import {Component} from "@angular/core";
import {PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent{


  constructor(
    private router:Router,
    private primengConfig: PrimeNGConfig,
  ) {}

  ngOnInit(): void {
  }
  signIn(){
    this.router.navigate(['/main']);
  }
}
