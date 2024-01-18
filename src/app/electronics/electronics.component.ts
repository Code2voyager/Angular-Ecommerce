import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  cart_URL = "http://localhost:8080/cart";
  jsonstring: any;
  response: any;
  productname:any;
  stock:any;
  status:any;
  image:any
  constructor(private http:HttpClient, private router:Router) { }

  

  ngOnInit() {
    
    // this.image =localStorage.getItem("productimage");
    //  this.productname = localStorage.getItem("productname");
    // "productname"= localStorage.getItem('productname');
    //  "productname":localStorage.getItem('productname'),
    // this.image = 'data:image/jpg;base64,' + "C:\Users\nidhi.shetty\Angular-workspace\app\src\assets\images"
  }
  view(n){
    // "Productname"= localStorage.getItem('PRODUCT_NAME'),
    localStorage.setItem('Productid',n),
    console.log("view1")
    if(!(localStorage.getItem('Username'))){
      console.log("view2")
      alert("User has to login");
      this.router.navigateByUrl('/applogin');

  }
else{
      
  console.log("view3")
console.log("/appdetails?id="+n)
    this.router.navigateByUrl('appdetails?id='+n); 
         
}
}

}
