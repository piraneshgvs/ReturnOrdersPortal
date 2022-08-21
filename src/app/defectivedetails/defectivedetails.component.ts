import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProcessedChargeInfo } from '../process-charge-info';
import { ProcessRequestInfo } from '../process-request-info';
import { ReturnOrderServiceService } from '../return-order-service.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-defectivedetails',
  templateUrl: './defectivedetails.component.html',
  styleUrls: ['./defectivedetails.component.css'],
  providers: [DatePipe]
})
export class DefectivedetailsComponent implements OnInit {

  panelOpenState = false;
  myDate = new Date();

  constructor(private returnOrderService : ReturnOrderServiceService, private router : Router, private datePipe: DatePipe) { }

  userName!:string;
  token!:string;
  processRequestInfo !: ProcessRequestInfo[];
  processedChargeInfo !: ProcessedChargeInfo[];

  ngOnInit(): void {
    if(sessionStorage.getItem("userName")&&sessionStorage.getItem("token")){
    let name = JSON.stringify(sessionStorage.getItem("userName")!);
    this.userName = name.slice(1,name.length-1);
    this.getDetails(this.userName);
    }
    else{
      this.router.navigate(["/login"]);
    }
  }

  getDetails(userName:string){
    this.token = JSON.stringify(sessionStorage.getItem("token")!);
    //console.log(this.token);
   this.returnOrderService.getDefectiveDetails(this.token,this.userName).subscribe((data)=>{
   // console.log(data[0]);
       
      this.processRequestInfo = data[0].processRequestInfo;
      this.processedChargeInfo = data[0].processedChargeInfo.slice().reverse();
      
   })

}







}
