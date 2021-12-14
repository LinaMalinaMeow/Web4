export class AuthService {
  isLoggedIn = false;

  isAuth() {
    return this.isLoggedIn;
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
