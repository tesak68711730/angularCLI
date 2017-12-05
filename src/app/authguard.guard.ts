import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {UserService} from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {

  constructor(private user: UserService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // delete this Observable<boolean> | Promise<boolean> |
    // this.router.navigate(['/']);
    // console.log('You are not Authenticated.');
    // return this.user.userName;
    return this.user.getUserLoginIn();
  }
}
