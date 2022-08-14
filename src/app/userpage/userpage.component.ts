import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DefectiveComponentInfo } from '../defective-component-info';
import { ProcessRequestInfo } from '../process-request-info';
import { ReturnOrderServiceService } from '../return-order-service.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  processRequestInfo !: ProcessRequestInfo;
  defectiveComponentInfo !: DefectiveComponentInfo;
  token !: string;
  contactNumber !: string;
  userName !: string;
  forGrp !: FormGroup;
  errorMessage !: string;
  

  constructor(private returnOrderService:ReturnOrderServiceService, private router : Router, private fb : FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
    if(sessionStorage.getItem("userName")&&sessionStorage.getItem("token")){
    this.processRequestInfo = new ProcessRequestInfo(null,"","",new DefectiveComponentInfo("","",null,""),new Date());
   // this.defectiveComponentInfo = new DefectiveComponentInfo("","",0,"");
   let name = JSON.stringify(sessionStorage.getItem("userName")!);
    this.userName = name.slice(1,name.length-1);
    }
    else{
      this.router.navigate(["/login"])
    }
   
  }

  onSubmit(){
    this.processRequestInfo.contactNumber = this.forGrp?.get('contactNumber')?.value;
    this.processRequestInfo.defectiveComponentInfo.componentName = this.forGrp?.get('componentName')?.value;
    this.processRequestInfo.defectiveComponentInfo.componentType = this.forGrp?.get('componentType')?.value;
    this.processRequestInfo.defectiveComponentInfo.quantity = this.forGrp?.get('quantity')?.value;
    this.processRequestInfo.defectiveComponentInfo.description = this.forGrp?.get('description')?.value;
    console.log(this.processRequestInfo.contactNumber);
   if(this.processRequestInfo.contactNumber.trim().length==10 && this.processRequestInfo.defectiveComponentInfo.componentName.trim() && this.processRequestInfo.defectiveComponentInfo.componentType.trim() && this.processRequestInfo.defectiveComponentInfo.quantity && this.processRequestInfo.defectiveComponentInfo.description.trim()){
   this.token = JSON.stringify(sessionStorage.getItem("token")!);
    console.log(this.processRequestInfo.defectiveComponentInfo.componentName);
    this.processRequestInfo.userName=this.userName;
    this.returnOrderService.postDefectiveDetails(this.token, this.processRequestInfo).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem("reqId",data);
      this.router.navigate(["/payment"]);
     })
    }
    else{
      this.errorMessage="Please fill out all the details of the defective component!!!"
    }
  }

  createForm() {
    this.forGrp = this.fb.group({
      contactNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")] ],
      componentName: ['', Validators.required ],
      componentType: ['', Validators.required ],
      quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$") ]],
      description: ['', Validators.required ]
    });

}
}
