import { Component, OnInit } from '@angular/core';
import { ProcessChargeInfo } from '../process-charge-info';
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
  processChargeInfo !: ProcessChargeInfo;
  constructor(private returnOrderService : ReturnOrderServiceService) { }

 ngOnInit(): void {
    let id = parseInt(sessionStorage.getItem("reqId")!);
   this.reqId = id;
    console.log("inside",id);
    this.getReqDetails(this.reqId);
  }

   getReqDetails(reqId:number){
    this.token = JSON.stringify(sessionStorage.getItem("token")!);
    this.returnOrderService.getDefectiveDetailsById(this.token, this.reqId).subscribe(data=>{
    console.log(data);
    })
  }

}
