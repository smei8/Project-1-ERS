import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/account/account.model';
import { AccountService } from 'src/app/account/account.service';

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
  
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    console.log(this.newAccount.userID);
    this.accountService.fetchAAccount(this.newAccount.userID).subscribe((response) => {
      console.log("this is response"+response);
      this.newAccount = response;
    });
  }
}
