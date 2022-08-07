import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { DefectiveComponentInfo } from './defective-component-info';
import { DefectivedetailsComponent } from './defectivedetails/defectivedetails.component';
import { PaymentComponent } from './payment/payment.component';

const router : Routes =[
  {path: "login", component: LoginpageComponent},
  {path: "userpage", component: UserpageComponent},
  {path: "defectivedetails", component: DefectivedetailsComponent},
  {path: "payment", component: PaymentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    UserpageComponent,
    DefectivedetailsComponent,
    PaymentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
