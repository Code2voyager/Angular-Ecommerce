import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms' 

@Component({
  selector: 'app-register1',
  templateUrl: './register1.component.html',
  styleUrls: ['./register1.component.css']
})
export class Register1Component implements OnInit {
  submitted = false;
  Rform1:FormGroup;

  ngOnInit(){
   this.Rform1= this.formBuilder.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    emailid: ['', [Validators.required, Validators.email]],
    passphase: ['', [Validators.required, Validators.minLength(6)]],
    Phone: ['', [Validators.required, Validators.minLength(10)]],
    uname: ['', Validators.required],
       
   })
  

  
  }
  //   Rform1 = new FormGroup({
 
  //   fname: new FormControl(),
  //   lname: new FormControl(),
  //   emailid: new FormControl(),
  //   passphase: new FormControl(),
  //   Phone: new FormControl(),
  //   uname:new FormControl()
    
    
    
   
 
  //  });
 
   register_URL = "http://localhost:8080/register";
   jsonstring: any;
   response: any;
 
   constructor( private http:HttpClient,private router:Router,private formBuilder: FormBuilder) { 
 
    }
 
    get f() { return this.Rform1.controls; }

    
    submit(){
      this.submitted = true;
      if (this.Rform1.invalid) {
        return;
    }
     {
       this.jsonstring =
       {
         "firstname":this.Rform1.getRawValue().fname,
   "lastname":this.Rform1.getRawValue().lname,
   "email":this.Rform1.getRawValue().emailid,
  //  "password":this.Rform1.getRawValue().passphase,
   "phoneno":this.Rform1.getRawValue().Phone,
   "Username":this.Rform1.getRawValue().uname,
   "password":this.Rform1.getRawValue().passphase
       };
       console.log(this.jsonstring)
       this.http.post(this.register_URL, this.jsonstring,
       {
       headers: { 'Content-Type': 'application/json' }
       }
       ).subscribe(data => {
        this.submitted = false;
       this.response = data
      if(this.response.status=="valid"){
        localStorage.setItem('firstname',this.Rform1.getRawValue().fname)
        console.log(this.Rform1.getRawValue().fname)
        localStorage.setItem('lastname',this.Rform1.getRawValue().lname)
        console.log(this.Rform1.getRawValue().lname)
      }
      // console.log(this.response)
      alert("Registeration successfully");
     //  this.location.back();
 
     
     //  if(this.response.status == "valid"){
     //   this.router.navigate(['appbody']);
     //  }
      this.router.navigate(['applogin1']);
      
       });
       }
      }
}
