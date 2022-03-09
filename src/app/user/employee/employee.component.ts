import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account/account.model';
import { AccountService } from 'src/app/account/account.service';
import { AuthService } from '../auth.service';
import { User } from '../login/user.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  newAccount: Account = {
    userID: 0,
    username: '',
    password: '',
    fullName: '',
    email: '',
    role_id: 0,
    role: ''
  }
  
  constructor(private accountService: AccountService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    let currentUser: User = this.authService.retrieveUser();
    console.log(currentUser);
    this.accountService.fetchAAccount(currentUser.username)
    this.accountService.fetchAAccount(currentUser.username).subscribe((response) => {
      console.log("this is response"+response);

      this.newAccount = response;
    });
  }
}
