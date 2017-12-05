import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name = 'anonymus';
  @ViewChild('myInputText') inputText;

  constructor(private user: UserService) {
    setInterval(() => {this.send2server(); }, 2000);
  }

  ngOnInit() {
    this.name = this.user.userName;
    console.log('I"ts User Login in ? ', this.user.getUserLoginIn());
  }

  send2server() {
    const data = this.inputText.nativeElement;
    console.log(data.value);
  }

}
