import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private returnOrderService:ReturnOrderServiceService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.processRequestInfo = new ProcessRequestInfo("","",new DefectiveComponentInfo("","",null,""));
   // this.defectiveComponentInfo = new DefectiveComponentInfo("","",0,"");
     console.log(this.router.snapshot.params);
  }

  onSubmit(){
   this.token = JSON.stringify(sessionStorage.getItem("token")!);
    console.log(this.token);
    console.log(this.processRequestInfo.defectiveComponentInfo.componentName);
    this.returnOrderService.postDefectiveDetails(this.token, this.processRequestInfo).subscribe(data=>{
      console.log(data);
     })
  }

}
