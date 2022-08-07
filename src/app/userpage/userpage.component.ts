import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
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
  

  constructor(private returnOrderService:ReturnOrderServiceService, private router : Router) { }

  ngOnInit(): void {
    this.processRequestInfo = new ProcessRequestInfo("","",new DefectiveComponentInfo("","",null,""));
   // this.defectiveComponentInfo = new DefectiveComponentInfo("","",0,"");
   let name = JSON.stringify(sessionStorage.getItem("userName")!);
    this.userName = name.slice(1,name.length-1);
   
  }

  onSubmit(){
   this.token = JSON.stringify(sessionStorage.getItem("token")!);
    console.log(this.token);
    console.log(this.processRequestInfo.defectiveComponentInfo.componentName);
    this.processRequestInfo.userName=this.userName;
    this.returnOrderService.postDefectiveDetails(this.token, this.processRequestInfo).subscribe(data=>{
      console.log(data);
      sessionStorage.setItem("reqId",data);
      this.router.navigate(["/payment"]);
     })
  }

}
