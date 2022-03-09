import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.model';
import { Router } from '@angular/router';

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
  
  constructor(private requestService: RequestService,
              private router: Router) { }

  ngOnInit(): void {
    this.loadAllRequests();
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
      this.allRequests = response;
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
