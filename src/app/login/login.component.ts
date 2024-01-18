import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  Lform:FormGroup;
  //  constructor(private http:HttpClient, private router:Router,private session:){ }

  ngOnInit() {
    this.Lform= this.formBuilder.group({
      pswd: ['', Validators.required],
      uname: ['', Validators.required],
         
     })
  }
  // Lform = new FormGroup({

  //   uname: new FormControl('',Validators.required),
  //   pswd: new FormControl('',[Validators.required,Validators.nullValidator]),
 
  //  });
 
   login_URL = "http://localhost:8080/login";
   jsonstring: any;
   response: any;
   productid:any;
 
   constructor( private http:HttpClient,private router:Router,private formBuilder: FormBuilder) { 
 
    }
    get f() { return this.Lform.controls; }
    submit(){
       
      this.submitted = true;
      if (this.Lform.invalid) {
        return;
    }
 
     {
       this.jsonstring =
       {
         "Username":this.Lform.getRawValue().uname,
           
         "pwd":this.Lform.getRawValue().pswd
        //  "productid":this.productId,
       };
       console.log(this.jsonstring);
       this.http.post(this.login_URL, this.jsonstring,
       {
       headers: { 'Content-Type': 'application/json' }
       }
       ).subscribe(data => {
       this.response = data
       console.log(this.response)

      if(this.response.status == 'valid'){
         localStorage.setItem("Username",this.Lform.getRawValue().uname);
        
         
        //  window.location.reload();
           this.router.navigateByUrl('appdetails?id='+localStorage.getItem('Productid'));
        // onSameUrlNavigation:'reload';
      }
      else{
      alert('Login failed');
        
      }
       });
       } 
       
    }
 

}

