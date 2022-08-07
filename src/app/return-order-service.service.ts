import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtRequest } from './jwt-request';
import { ProcessRequestInfo } from './process-request-info';

@Injectable({
  providedIn: 'root'
})
export class ReturnOrderServiceService {


  constructor(private http:HttpClient) { }
  

  autheticateUser(jwtRequest:JwtRequest):Observable<any>{
      return this.http.post("http://localhost:8081/authenticate",jwtRequest);  
  }

  postDefectiveDetails(token:string, processRequestInfo:ProcessRequestInfo):Observable<any>{
    var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    headers.set('Content-Type', 'application/json');
      return this.http.post("http://localhost:8082/processing/CompleteProcessing",processRequestInfo,{headers:headers});
  }

  getDefectiveDetails(token:string,userName:string):Observable<any>{
    var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    headers.set('Content-Type', 'application/json');
    return this.http.get("http://localhost:8082/processing/getDefectiveDetails/"+userName,{headers:headers});
  }


}
