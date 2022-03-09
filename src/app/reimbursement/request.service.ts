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

  // viewPendingRequest(reqId: any): Request {


  // }

  // reviewRequest(requestModel: any): Request {

  // }

  // deleteRequest(reqId: number): Request[] {
  
  // }
}
