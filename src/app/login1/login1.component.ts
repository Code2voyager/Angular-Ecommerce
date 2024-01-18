import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  submitted = false;
  Lform1:FormGroup;
  ngOnInit() {

    this.Lform1= this.formBuilder.group({
     
      pswd: ['', [Validators.required]],
     
      uname: ['', [Validators.required]],
         
     })
  }
  // Lform1 = new FormGroup({

  //   uname: new FormControl(),
  //   pswd: new FormControl(),
 
  //  });
 
   login_URL = "http://localhost:8080/login";
   jsonstring: any;
   response: any;
 
   constructor( private http:HttpClient,private router:Router,private formBuilder: FormBuilder) { 
 
    }
    get f() { return this.Lform1.controls; }
    submit(){

      this.submitted = true;
      if (this.Lform1.invalid) {
        return;
    }
 
     {
       this.jsonstring =
       {
         "Username":this.Lform1.getRawValue().uname,
  
         "pwd":this.Lform1.getRawValue().pswd
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
         localStorage.setItem("Username",this.Lform1.getRawValue().uname);
         this.router.navigateByUrl('/appbody')
          // this.router.navigate(['appbody']);
        // onSameUrlNavigation:'reload';
      }
      else{
      alert('Login failed');
        
      }
       });
       } 
       
    }

}
