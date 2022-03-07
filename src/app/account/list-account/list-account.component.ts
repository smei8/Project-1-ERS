import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private accountService: AccountService, private router: Router) { }

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

  goToEditBook(userId: number) {
    //route to edit account component, paht is account-edit
    this.router.navigate(['account-edit', userId]);
  }

  addAccount() {
    let addNewAccount: Account = {
      userId: 0,
      username: this.newAccount.username,
      password: this.newAccount.password,
      fullName: this.newAccount.fullName,
      email: this.newAccount.email,
      roleId: 0,
      role: this.newAccount.role
    }

    this.accountService.addAccount(addNewAccount);
    this.allAccount = this.accountService.fetchAllAccount();

    this.newAccount = {
      userId: 0,
      username: '',
      password: '',
      fullName: '',
      email: '',
      roleId: 0,
      role: ''
    }
  }
  deleteAccount(userId: number) {
    this.allAccount = this.accountService.deleteAccount(userId);
  }
}
