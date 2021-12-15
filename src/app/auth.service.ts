export class AuthService {
  isLoggedIn = false;
  id;

  isAuth() {
    return this.isLoggedIn;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  logIn() {
    this.isLoggedIn = true;
  }

  logOut() {
    this.isLoggedIn = false;
  }
}
