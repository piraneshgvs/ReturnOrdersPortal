import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { JwtRequest } from './jwt-request';
import { ProcessRequestInfo } from './process-request-info';
import { UserInformation } from './user-information';

@Injectable({
  providedIn: 'root'
})
export class ReturnOrderServiceService {


  constructor(private http:HttpClient) { }
  
  public loginStatusSubject=new Subject<boolean>();

  
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

  getDefectiveDetailsById(token:string, id:number):Observable<any>{
    var headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    headers.set('Content-Type', 'application/json');
    console.log(id);
    return this.http.get("http://localhost:8082/processing/ProcessDetail/"+id,{headers:headers});
  }

  postTheRegisteredDetails(userInformation:UserInformation):Observable<any>{
    return this.http.post("http://localhost:8081/register",userInformation);
  }

  public isLoggedIn(){
    let tokenString = localStorage.getItem("token"); //get the token from localStorage
    if(tokenString==undefined || tokenString=='' || tokenString== null){
      return false;
    }
    else{
     return true;
    }
  }

}
