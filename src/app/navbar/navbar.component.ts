import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReturnOrderServiceService } from '../return-order-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn : boolean = false;
  name !: string;
  constructor(private returnOrderService : ReturnOrderServiceService) { }

  ngOnInit(): void {
   
   /* this.returnOrderService.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.returnOrderService.isLoggedIn();
      this.checkLogin();
    })*/
  }

  loggedIn(){
    let user =  JSON.stringify(sessionStorage.getItem("userName")).trim();
    this.name = user.slice(1,user.length-1);
    return sessionStorage.getItem("token");
  }

  clearSession(){
    sessionStorage.clear();
  }
 

}
