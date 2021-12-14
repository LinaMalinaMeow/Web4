export class AuthService {
  isLoggedIn = false;

  isAuth() {
    return false;
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
