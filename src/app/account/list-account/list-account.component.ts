import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  allAccount: Account[] = [];
  toggleAdd: boolean = false;

  newAccount: Account = {
    userId: 0,
    username: '',
    password: '',
    fullName: '',
    email: '',
    roleId: 0,
    role: ''
  }
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.allAccount = this.accountService.fetchAllAccount();
  }

  toggleAddForm() {
    if(this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }

  deleteAccount(userId: number) {
    this.allAccount = this.accountService.deleteAccount(userId);
  }
}
