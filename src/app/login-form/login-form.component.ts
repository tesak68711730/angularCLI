import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor( private router: Router, private user: UserService) {}

  ngOnInit() {
  }

  loginUser(e) {
    const userName = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    console.log(userName, password);
    if (userName === 'admin' && password === 'admin') {
      this.user.setUserLoginIn();
      this.router.navigate(['dashboard']);
    }
    return false;
  }

}
