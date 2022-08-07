import { Component, OnInit } from '@angular/core';
import { ReturnOrderServiceService } from '../return-order-service.service';

@Component({
  selector: 'app-defectivedetails',
  templateUrl: './defectivedetails.component.html',
  styleUrls: ['./defectivedetails.component.css']
})
export class DefectivedetailsComponent implements OnInit {

  constructor(private returnOrderService : ReturnOrderServiceService) { }

  userName!:string;
  token!:string;

  ngOnInit(): void {
    let name = JSON.stringify(sessionStorage.getItem("userName")!);
    u
    console.log("hai",name.slice(1,2));
    this.getDetails(this.userName);
  }

  getDetails(userName:string){
    this.token = JSON.stringify(sessionStorage.getItem("token")!);
    console.log(this.token);
   this.returnOrderService.getDefectiveDetails(this.token,this.userName).subscribe(data=>{
       console.log(data);
   })
  }

}
