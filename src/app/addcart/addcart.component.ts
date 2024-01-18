import { Component, OnInit, LOCALE_ID } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {


  delete_url="http://localhost:8080/delete1";
  // register_URL = "http://localhost:8080/cart";
  // prod_Url ="http://localhost:8080/cartuser"
  jsonstring: any;
  response: any;
  response1: any;
  price:any;
  name:any;
  // response.PRODUCT_ID;
  status:any;
  Quantity:any;
  product :any;
  username =  localStorage.getItem('Username');
  str1 = "http://localhost:8080/getcart/";
  str2=this.str1.concat(this.username);


 
  constructor(private http:HttpClient, private router:Router) { }
 

  
  ngOnInit() {
    // sessionStorage.setItem("Productid","010");
      
  //    this.name = localStorage.getItem("Username");
    // this.product = localStorage.getItem("Productname");
  //  this.price = localStorage.getItem("price");
  this.http.get(this.str2, {headers: { 'Content-Type': 'application/json' }

}).subscribe(data => {
this.response = data;
console.log(this.response);


// "product" =this.response.get('PRODUCT_ID')
});

  
  }

  delete(response){
    // localStorage.getItem('PRODUCT_ID');/
    
      // localStorage.getItem(PRODUCT_ID);
      // console.log(PRODUCT_ID)
    
    // "product" =this.response.get('PRODUCT_ID')
    console.log(response)
      this.jsonstring =
      {
        "PRODUCT_NAME": response,
        "Username": this.username
      };
      console.log(this.jsonstring);


      this.http.post(this.delete_url, this.jsonstring,
      {
      headers: { 'Content-Type': 'application/json' }
      }
      ).subscribe(data => {
      this.response1= data
     
      console.log(this.response1)

      if(this.response1.status == "valid"){
        window.location.reload()
      }

      });
  

}
check(){
  // alert("Your order hs been placed successfully");
          
   this.router.navigateByUrl('/apppayment');
}

}
