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
  constructor(private returnOrderService : ReturnOrderServiceService) { }

  ngOnInit(): void {
   /* this.returnOrderService.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.returnOrderService.isLoggedIn();
      this.checkLogin();
    })*/
  }

  loggedIn(){
    return sessionStorage.getItem("token");
  }
 

}
