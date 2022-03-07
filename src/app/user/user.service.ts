import { Injectable } from '@angular/core';
import { Account } from '../account/account.model';
import { AccountService } from '../account/account.service';
import { RequestService } from '../reimbursement/request.service';
import { AuthService } from './auth.service';
import { User } from './login/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  allAccounts: Account [] = [];

  constructor(private authService: AuthService, private accountService: AccountService) { }

  valiadteUser(newUser: User): User {
    this.allAccounts = this.accountService.fetchAllAccount();
    let username: string = this.accountService.fetchAAccount(this.allAccounts).username;
    let password: string = this.accountService.fetchAAccount(this.allAccounts).password;
    let getrole: number = this.accountService.fetchAAccount(this.allAccounts).roleId;


    if(newUser.role=='Manager' && newUser.userName=="bruno01" && newUser.password=="nonono") {
      //1. store user information in browser storage
      this.authService.storeUser(newUser);

      //2. mark that we have logged in
      this.authService.loggedIn = true;

    } else if(newUser.role=="associate" && newUser.userName=="levi01" && newUser.password=="Levi631") {
      //1. store user information in browser storage
      this.authService.storeUser(newUser);

      //2. mark that we have logged in
      this.authService.loggedIn = true; 

    } else {
      newUser = {
        userName: "",
        password: "",
        role: ""
      }
    }
    return newUser;
  }
}
