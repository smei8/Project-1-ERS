import { Injectable } from '@angular/core';
import { Account } from './account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  oneAcount: Account = {
    userId: 101,
    username: 'bruno123',
    password: 'nonono',
    fullName: 'bb',
    email: 'brunoj@business.com',
    roleId: 1,
    role: 'manager'
  };

  allAccount: Account[] = [
    {
      userId: 1,
      username: 'bruno01',
      password: 'nonono',
      fullName: 'Bruno Fly',
      email: 'brunoj@business.com',
      roleId: 1,
      role: 'Manager'
    },
    {
      userId: 2,
      username: 'levi01',
      password: 'Levi631',
      fullName: 'Levi Arckerman',
      email: 'levi@business.com',
      roleId: 2,
      role: 'Associate'
    },
    {
      userId: 3,
      username: 'Storm01',
      password: 'snow',
      fullName: 'Snow Storm',
      email: 'storm@business.com',
      roleId: 2,
      role: 'Associate'
    }
  ];

  constructor() { }

  fetchAllAccount(): Account[] {
    return this.allAccount;
  }

  deleteAccount(userId: number): Account[] {
    for(let i = 0; i < this.allAccount.length; i++) {
      if(this.allAccount[i].userId == userId) {
        this.allAccount.splice(i, 1);
        break;
      }
    }
    return this.allAccount;
  }

  addAccount(accountModel: Account): Account {
    let newAccountId: number = this.allAccount[this.allAccount.length - 1].userId + 1;
    accountModel.userId = newAccountId;
    this.allAccount.push(accountModel);
    return accountModel;
  }

  updateAccount(accountModel: Account): Account {
    for(let i = 0; i < this.allAccount.length; i++) {
      if(this.allAccount[i].userId == accountModel.userId) {
        this.allAccount[i] = accountModel;
        break;
      }
    }
    return accountModel;
  }

  fetchAAccount(userId: any): Account {
    
    for(let i = 0; i < this.allAccount.length; i++) {
      if(this.allAccount[i].userId == userId) {
        return this.allAccount[i];
      }
    }
    return {
      userId: 0,
      username: '',
      password: '',
      fullName: '',
      email: '',
      roleId: 0,
      role: ''
    }

  }
}
