import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.model';

@Component({
  selector: 'app-list-request',
  templateUrl: './list-request.component.html',
  styleUrls: ['./list-request.component.css']
})
export class ListRequestComponent implements OnInit {

  allRequests: Request[] = [];
  toggleAdd: boolean = false;
  
  newRequest: Request = {
      reqId: 0,
      userId: 0,
      reqType: '',
      reqAmount: 0,
      reqStatus: '',
      submitDate: '',
      approvedDate: '',
      manager: ''
    };
  
  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
    this.allRequests = this.requestService.viewAllRequest();
  }

  toggleAddForm() {
    if(this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }

  addRequest() {
    let addNewRequest: Request = {
      reqId: 0,
      userId: this.newRequest.userId,
      reqType: this.newRequest.reqType,
      reqAmount: this.newRequest.reqAmount,
      reqStatus: this.newRequest.reqStatus,
      submitDate: this.newRequest.submitDate,
      approvedDate: this.newRequest.approvedDate,
      manager: this.newRequest.manager
    };

    this.requestService.addRequest(addNewRequest);
    this.allRequests = this.requestService.viewAllRequest();

    this.newRequest = {
      reqId: 0,
      userId: 0,
      reqType: '',
      reqAmount: 0,
      reqStatus: '',
      submitDate: '',
      approvedDate: '',
      manager: ''
    };
  }
}
