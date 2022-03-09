import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/user/auth.service';
import { ConnectableObservable } from 'rxjs';

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
              private router: Router,
              private authService: AuthService) { }

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
    //this has current manager info that logged in
    let currentManager: any = this.authService.retrieveUser();
    console.log(currentManager);

    //get all requests from the backend and stored in response
    this.requestService.viewAllRequest().subscribe((response) => {
      console.log(response); // a list of all requests

      for(let i = 0; i < response.length; i++) {
        if(response[i].manager == currentManager.userID) {
          console.log(this.allRequests[i]);
          this.allRequests.push(response[i]);
        }  
      }
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
