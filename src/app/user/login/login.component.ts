import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UserService } from '../user.service';
import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  newUser: User = {
    userName: "",
    password: "",
    role: ""
  };
  
  errorMessage: string = "";

  constructor(private userSerivce: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  valiadteUser() {
    let returnUser: User = this.userSerivce.valiadteUser(this.newUser);

    if(returnUser.userName == "") {
      // invalid 
      this.errorMessage = "Invalid Credentials!!"
    } else {
      if(returnUser.role == "Manager") {
        this.router.navigate(['request-crud']);
      } else {
        this.router.navigate(['acount-crud']);
      }
      //logged in
      console.log("Logged in successful!")
    }
  }
}
