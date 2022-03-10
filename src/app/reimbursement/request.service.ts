import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from './request.model';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  constructor(private http: HttpClient) { }

  viewAllRequest(): Observable<Request[]> {
    return this.http.get<Request[]>("http://localhost:4040/api/all/requests");
  }

  addRequest(requestModel: Request): Observable<Request> {
    return this.http.post<Request>("http://localhost:4040/api/requests", JSON.stringify(requestModel));
  }

  fetchARequest(reqId: any): Observable<Request> {
    return this.http.get<Request>("http://localhost:4040/api/requests/"+reqId);
  }
  
  viewPendingRequest(): Observable<Request[]> {
    return this.http.get<Request[]>("http://localhost:4040/api/requests%22");
  }

  reviewRequest(requestModel: Request): Observable<Request> {
    return this.http.put<Request>("http://localhost:4040/api/requests", JSON.stringify(requestModel));
    // return this.http.put<Request>("http://localhost:4040/api/requests"+reqId+"/"+status);
    //return this.http.put<Request>("http://localhost:4040/api/requests/",JSON.stringify([reqId, reqStatus]));
    // return this.http.put<any>(`http://localhost:4040/api/requests/${reqId}/${reqStatus}`,JSON.stringify(Request));
  }

  // deleteRequest(reqId: number): Request[] {
  
  // }
}
