import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  
  constructor(public keyboard: Keyboard) { }

  ngOnInit() {
    this.keyboard
  }

  login(){

  }

  register(){
    console.log(this.userRegister);
  }

}
