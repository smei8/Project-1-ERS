import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/reimbursement/request.service';
import { Request } from 'src/app/reimbursement/request.model';

@Component({
  selector: 'app-ep-request',
  templateUrl: './ep-request.component.html',
  styleUrls: ['./ep-request.component.css']
})
export class EpRequestComponent implements OnInit {

  allEpRequests: Request[] = [];
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

  constructor(private requestService: RequestService,
              private router: Router) { }

  ngOnInit(): void {
  }

  toggleAddForm() {
    if(this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }

  loadAllRequests() {
    this.requestService.viewAllRequest().subscribe((response) => {
      console.log(response);
      this.allEpRequests = response;
    });
  }

  addRequest() {
    this.requestService.addRequest(this.newRequest).subscribe((response) => {
      console.log(response);
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

      this.loadAllRequests();
    });
  }
}
