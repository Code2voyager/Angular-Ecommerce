import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  
  selector: 'app-header',
  styleUrls:['./app-header.component.css'],  
  templateUrl: 'app-header.component.html'
  // template: `<ion-nav [root]="rootPage"></ion-nav>`
 
})
export class AppHeaderComponent implements OnInit {
  

  constructor(private router:Router,private Http:HttpClient) { }

  ngOnInit() {
     
    
  }
  
   
 

}
