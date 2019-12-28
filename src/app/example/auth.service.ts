import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isloggedIn = false;

  constructor() {
  }

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.isloggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.isloggedIn = true;
  }

  logout() {
    this.isloggedIn = false;
  }
}
