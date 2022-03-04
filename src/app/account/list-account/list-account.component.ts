import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.css']
})
export class ListAccountComponent implements OnInit {

  oneAcount = {
    epId: 101,
    firstName: 'Bruno',
    lastName: 'Jelly',
    username: 'bruno123',
    password: 'nonono',
    email: 'brunoj@business.com',
    roleId: 1
  };

  allAccount = [
    {
      epId: 1,
      username: 'bruno01',
      password: 'nonono',
      fullName: 'Bruno Fly',
      email: 'brunoj@business.com',
      roleId: 1
    },
    {
      epId: 2,
      username: 'levi01',
      password: 'Levi631',
      fullName: 'Levi Arckerman',
      email: 'levi@business.com',
      roleId: 2
    },
    {
      epId: 3,
      username: 'Storm01',
      password: 'snow',
      fullName: 'Snow Storm',
      email: 'storm@business.com',
      roleId: 2
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  deleteAccount(epId: number) {
    for(let i = 0; i < this.allAccount.length; i++) {
      if(this.allAccount[i].epId == epId) {
        this.allAccount.splice(i, 1);
        break;
      }
    }
  }
}
