import { getLocaleDayPeriods } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessedChargeInfo } from '../process-charge-info';
import { ProcessRequestInfo } from '../process-request-info';
import { ReturnOrderServiceService } from '../return-order-service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  token !: string;
  reqId !: number;
  processRequestInfo !: ProcessRequestInfo;
  processedChargeInfo !: ProcessedChargeInfo;
  isDataLoaded : boolean=false;

  constructor(private returnOrderService : ReturnOrderServiceService, private route : Router) { }

ngOnInit() : void {
  if(sessionStorage.getItem("userName")&&sessionStorage.getItem("token")&&!sessionStorage.getItem("reqId")){
    this.route.navigate(["/userpage"]);
  }
  else if(sessionStorage.getItem("userName")&&sessionStorage.getItem("token")){
    let id = parseInt(sessionStorage.getItem("reqId")!);
    this.reqId = id;
    console.log("inside",id);
    this.getReqDetails(this.reqId);
  }
  else{
    this.route.navigate(["/login"]);
  }
  }

   getReqDetails(reqId:number){
    this.token = JSON.stringify(sessionStorage.getItem("token")!);
    this.returnOrderService.getDefectiveDetailsById(this.token, this.reqId).subscribe(data=>{
      console.log(data);
    this.processedChargeInfo = data.processedChargeInfo;
    this.processRequestInfo = data.processRequestInfo;
    this.isDataLoaded=true;
    })
  }
clearItem(){
  sessionStorage.removeItem("reqId");
}

}
