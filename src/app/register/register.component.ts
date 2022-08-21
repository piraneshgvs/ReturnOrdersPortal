import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReturnOrderServiceService } from '../return-order-service.service';
import { UserInformation } from '../user-information';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userInformation !: UserInformation;
  forGrp !: FormGroup;
  errorMessage !: string;

  constructor(private router : Router,  private fb : FormBuilder,private returnOrderService : ReturnOrderServiceService) { 
    this.createForm();
  }

  ngOnInit(): void {
      this.userInformation = new UserInformation(null,"","","","","");
      if(sessionStorage.getItem("userName")&&sessionStorage.getItem("token")){
        this.router.navigate(["/defectivedetails"])
         }
  }


  createForm() {
    this.forGrp = this.fb.group({
      name:  ['', Validators.required ],
      userName: ['', [Validators.required, Validators.minLength(4)] ],
      password: ['', [Validators.required, Validators.minLength(5)]],
      contactNumber: ['', [Validators.required,Validators.pattern(/^\d{10}$/g)]],
      emailId: ['', [Validators.required,Validators.email]],
      confirmPassword: ['',Validators.required],
    },{
      validators:this.Mushmatch('password','confirmPassword')
    }
    );
  }

  Mushmatch(password:any, confirmPassword:any){
    return(formGroup:FormGroup)=>{
      const passwordControls = formGroup.controls[password];
      const confirmPasswordControls = formGroup.controls[confirmPassword];

      if(passwordControls.value!==confirmPasswordControls.value){
        confirmPasswordControls.setErrors({Mushmatch:true});
      }
      else {
        confirmPasswordControls.setErrors(null);
      }
    }
  }

 
  onSubmit(){
    this.userInformation.name = this.forGrp?.get('name')?.value;
    this.userInformation.contactNumber = this.forGrp?.get('contactNumber')?.value;
    this.userInformation.emailId = this.forGrp?.get('emailId')?.value;
    this.userInformation.userName = this.forGrp?.get('userName')?.value;
    this.userInformation.password = this.forGrp?.get('password')?.value;
    console.log(this.userInformation.contactNumber);
    this.returnOrderService.postTheRegisteredDetails(this.userInformation).subscribe({
      next:(data)=>{
        if(data.message==="Success"){
          this.router.navigate(["/login"]);
        }
        else{
          this.errorMessage=data.message;
        }
      },
      error:(error)=>{
          console.log(error.errorMessage);
      }

      })


  }
}
