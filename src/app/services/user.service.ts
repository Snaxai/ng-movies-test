import { Injectable } from '@angular/core';F

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _username: string = '';

  get username(): string {
    return this.username;
  }

  set username(username: string) {
    sessionStorage.setItem('username', this.username);
    this._username = this.username;
  }

  constructor() {
    // make const for USER_KEY
    const storeUser = sessionStorage.getItem(USER_KEY);
  }
}
