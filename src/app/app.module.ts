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
import { ReactiveFormsModule } from '@angular/forms';
import { BillpageComponent } from './billpage/billpage.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register/register.component';

const router : Routes =[
  {path: "login", component: LoginpageComponent},
  {path: "userpage", component: UserpageComponent},
  {path: "defectivedetails", component: DefectivedetailsComponent},
  {path: "payment", component: PaymentComponent},
  {path: "billpage", component: BillpageComponent},
  {path : "register", component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginpageComponent,
    UserpageComponent,
    DefectivedetailsComponent,
    PaymentComponent,
    BillpageComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
