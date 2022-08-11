import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from '../jwt-request';
import { ReturnOrderServiceService } from '../return-order-service.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  jwtRequest !: JwtRequest;

  constructor(private returnOrderService:ReturnOrderServiceService,  private router : Router) { }

  ngOnInit(): void {
    this.jwtRequest = new JwtRequest("","");
  }

  onSubmit(){
    this.returnOrderService.autheticateUser(this.jwtRequest).subscribe(data=>{
        console.log(data);
        sessionStorage.setItem("token",data.jwttoken);
        console.log(data.contactNumber)
        sessionStorage.setItem("userName",this.jwtRequest.username);
        this.router.navigate(["/defectivedetails"]);
    })
  }

}
