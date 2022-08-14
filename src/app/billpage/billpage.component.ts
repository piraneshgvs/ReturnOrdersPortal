import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-billpage',
  templateUrl: './billpage.component.html',
  styleUrls: ['./billpage.component.css']
})
export class BillpageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    if(!sessionStorage.getItem("userName")&&!sessionStorage.getItem("token")){
      this.router.navigate(["/login"]);
    }
  }

}
