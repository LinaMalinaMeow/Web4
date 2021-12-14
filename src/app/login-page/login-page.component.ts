import {Component} from "@angular/core";
import {PrimeNGConfig} from "primeng/api";
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user/user";
import {AuthService} from "../auth.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
    private userService: UserService,
    private authService: AuthService
  ) {
  }

  private user: User = new User();

  ngOnInit(): void {
  }

  signIn() {
    // @ts-ignore
    this.user.username = $('#login').val();
    // @ts-ignore
    this.user.password = $('#password').val();
    if (this.user.username === "" || this.user.password === "") {
      console.log("Поля не должны быть пустыми")
    } else {
      this.userService.login(this.user).subscribe(data => {
          this.toMainPage();
        },
        error => {
          if (error.status == '400') {
            console.log(error.error)
            return;
          } else if (error.status == '200'){
            this.toMainPage();
          }
        });
    }
  }

  toMainPage() {
    this.authService.logIn()
    this.router.navigate(['/main'])
  }

  registration() {
    // @ts-ignore
    this.user.username = $('#login').val();
    // @ts-ignore
    this.user.password = $('#password').val();
    if (this.user.username === "" || this.user.password === "") {
      console.log("Поля не должны быть пустыми")
    } else {
      this.userService.createUser(this.user).subscribe(data => {
          this.toMainPage();
        },
        error => {
          console.log(error)
          return;
        });
    }
  }
}
