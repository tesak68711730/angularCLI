import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoginIn;
  public userName;

  constructor() {
    this.isUserLoginIn = false;
  }

  setUserLoginIn() {
    this.isUserLoginIn = true;
    this.userName = 'admin';
  }

  getUserLoginIn() {
    return this.isUserLoginIn;
  }

}
