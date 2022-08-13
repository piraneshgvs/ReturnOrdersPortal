import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtRequest } from '../jwt-request';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReturnOrderServiceService } from '../return-order-service.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  jwtRequest !: JwtRequest;
  forGrp !: FormGroup;
  errorMessage !: string;

  constructor(private returnOrderService:ReturnOrderServiceService,  private router : Router, private fb : FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.jwtRequest = new JwtRequest("","");
  }

  onSubmit(){
    this.jwtRequest.username = this.forGrp?.get('username')?.value;
    this.jwtRequest.password = this.forGrp?.get('password')?.value;
    if(this.jwtRequest.username.trim()&&this.jwtRequest.password.trim()){
    this.returnOrderService.autheticateUser(this.jwtRequest).subscribe(data=>{
        console.log(data);
        sessionStorage.setItem("token",data.jwttoken);
        console.log(data.contactNumber)
        sessionStorage.setItem("userName",this.jwtRequest.username);
        this.router.navigate(["/defectivedetails"]);
    },
    (error)=>{
      console.log("Invalid credentials!!!");
      this.errorMessage="Invalid Credentials!!";
    })
  }
  else{
    this.errorMessage="Please Enter valid username or password!!!";
  }
  }

  createForm() {
    this.forGrp = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }


}
