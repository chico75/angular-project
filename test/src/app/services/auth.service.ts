export class AuthService {
  isAuth = false;
  SingIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
            resolve(true);
          }, 2000
        );
        }
    );
  }
  SingOut() {
    this.isAuth = false;
  }


}
