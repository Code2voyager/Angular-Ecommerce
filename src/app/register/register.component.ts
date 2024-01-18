import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms' 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})

export class RegisterComponent implements OnInit{
  submitted = false;
  Rform:FormGroup;

 ngOnInit(){
  this.Rform= this.formBuilder.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    // emailid: ['', [Validators.required, Validators.email]],
    emailid:['',Validators.compose([
            Validators.required,
            Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{3,63}$")
          ])], 
      
    //  passphase: ['', [Validators.required, Validators.minLength(6)]],
    passphase:['',Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])], 
      
    
    Phone: ['', Validators.compose([
            Validators.required,
      Validators.minLength(9), 
            Validators.maxLength(10),
      Validators.pattern('^[0-9]*$')
          ])],

    uname: ['', Validators.compose([
            Validators.required,
    
          ])],
       
   })
  
  
 }
  // Rform = new FormGroup({

  //  fname: new FormControl(),
  //  lname: new FormControl(),
  //  emailid: new FormControl(),
  //  passphase: new FormControl(),
  //  Phone: new FormControl(),
  //  uname:new FormControl()
   
   
   
  

  // });

  register_URL = "http://localhost:8080/register";
  jsonstring: any;
  response: any;

  constructor( private http:HttpClient,private router:Router,private formBuilder: FormBuilder) { 

   }
   get f() { return this.Rform.controls; }
   submit(){
    this.submitted = true;
    if (this.Rform.invalid) {
      return;
  }
    {
      this.jsonstring =
      {
      	"firstname":this.Rform.getRawValue().fname,
	"lastname":this.Rform.getRawValue().lname,
	"email":this.Rform.getRawValue().emailid,
  "password":this.Rform.getRawValue().passphase,
  "phoneno":this.Rform.getRawValue().Phone,
  "Username":this.Rform.getRawValue().uname,
  // "Password":this.Rform.getRawValue().passphase
      };
      console.log(this.jsonstring)
      this.http.post(this.register_URL, this.jsonstring,
      {
      headers: { 'Content-Type': 'application/json' }
      }
      ).subscribe(data => {
      this.response = data
      console.log(this.response)
     // console.log(this.response)
     alert("Registeration successfully");
    //  this.location.back();

    
    //  if(this.response.status == "valid"){
    //   this.router.navigate(['appbody']);
    //  }
     this.router.navigate(['applogin']);
     
      });
      } 
      
   }



   


  

}
