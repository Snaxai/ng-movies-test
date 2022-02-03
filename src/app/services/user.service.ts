import { Injectable } from '@angular/core';

const USER_KEY = 'movies-username';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _username: string = '';

  get username(): string {
    return this._username;
  }

  set username(username: string) {
    sessionStorage.setItem(USER_KEY, this.username);
    this._username = username;
  }

  constructor() {
    this._username = sessionStorage.getItem(USER_KEY) || '';
  }
}
