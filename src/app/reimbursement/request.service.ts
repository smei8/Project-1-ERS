import { Injectable } from '@angular/core';
import { Request } from './request.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  statusReq: number = 0; // 0 the status is pending, 1 - approved, 2 - denied
  
  allRequests: Request[] = [
    {
      reqId: 1,
      userId: 2,
      reqType: 'travel',
      reqAmount: 50,
      reqStatus: '',
      submitDate: '2022-03-03',
      approvedDate: '',
      manager: 'Bruno'
    },
    {
      reqId: 2,
      userId: 3,
      reqType: 'travel',
      reqAmount: 100,
      reqStatus: '',
      submitDate: '2022-02-22',
      approvedDate: '2022-03-01',
      manager: 'Bruno'
    },
    {
      reqId: 3,
      userId: 3,
      reqType: 'food',
      reqAmount: 100,
      reqStatus: '',
      submitDate: '2022-02-22',
      approvedDate: '2022-03-01',
      manager: 'Bruno'
    }
  ];
  
  constructor() { }

  viewAllRequest(): Request[] {
    return this.allRequests;
  }

  addRequest(requestModel: Request): Request {
    let newReqId: number = this.allRequests[this.allRequests.length-1].reqId + 1;
    requestModel.reqId = newReqId;
    this.allRequests.push(requestModel);
    return requestModel;
  }

  viewPendingRequest(reqId: any): Request {
    for(let i = 0; i < this.allRequests.length; i++) {
      if(this.allRequests[i].reqId == reqId && this.allRequests[i].reqStatus == 'pending') {
        return this.allRequests[i];
      }
    }
    return {
      reqId: 0,
      userId: 0,
      reqType: '',
      reqAmount: 0,
      reqStatus: '',
      submitDate: '',
      approvedDate: '',
      manager: ''
    }

  }

  reviewRequest(requestModel: any): Request {
    for(let i = 0; i < this.addRequest.length; i++) {
      if(this.allRequests[i].reqId == requestModel.reqId) {
        switch(this.statusReq) {
          case 2:
            requestModel.reqStatus = "denied";
            break;
          case 1:
            requestModel.reqStatus = "approved";
            break;
          default:
            requestModel.reqStatus = "pending";
            break;
        }
      }
    }
    return requestModel;
  }

  deleteRequest(reqId: number): Request[] {
    for(let i = 0; i < this.allRequests.length; i++) {
      if(this.allRequests[i].reqId == reqId) {
        this.allRequests.splice(i, 1);
        break;
      }
    }
    return this.allRequests;
  }
}
