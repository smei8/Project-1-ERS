import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  allRequests = [
    {
      reqId: 1,
      userId: 2,
      reqType: 'travel',
      reqAmount: 50,
      reqStatus: 'pending',
      submitDate: '2022-03-03',
      approvedDate: '',
      manager: 'Bruno'
    },
    {
      reqId: 2,
      userId: 3,
      reqType: 'travel',
      reqAmount: 100,
      reqStatus: 'approved',
      submitDate: '2022-02-22',
      approvedDate: '2022-03-01',
      manager: 'Levi'
    },
    {
      reqId: 3,
      userId: 3,
      reqType: 'food',
      reqAmount: 100,
      reqStatus: 'denied',
      submitDate: '2022-02-22',
      approvedDate: '2022-03-01',
      manager: 'Bruno'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
