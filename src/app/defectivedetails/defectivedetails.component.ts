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
  styleUrls: ['./defectivedetails.component.css']
})
export class DefectivedetailsComponent implements OnInit {

  panelOpenState = false;

  constructor(private returnOrderService : ReturnOrderServiceService, private router : Router) { }

  userName!:string;
  token!:string;
  processRequestInfo !: ProcessRequestInfo[];
  processedChargeInfo !: ProcessedChargeInfo[];

  ngOnInit(): void {
    let name = JSON.stringify(sessionStorage.getItem("userName")!);
    this.userName = name.slice(1,name.length-1);
    this.getDetails(this.userName);
  }

  getDetails(userName:string){
    this.token = JSON.stringify(sessionStorage.getItem("token")!);
    console.log(this.token);
   this.returnOrderService.getDefectiveDetails(this.token,this.userName).subscribe((data)=>{
    console.log(data[0]);
      this.processRequestInfo = data[0].processRequestInfo;
      this.processedChargeInfo = data[0].processedChargeInfo;
      
   })

}

checkForDate(i:Date){
  const currDate = new Date();
  if(i>currDate){
    return true;
  }
  return false;
}





}
