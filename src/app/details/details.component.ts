import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  cart_URL :any;
  prod_Url :any;
  update_url:any;
  jsonstring: any;
  response: any;
  status:any;
  stock: any;
  productId: any;
  Productname:any;
  price:any;
  select : any;
  image:any;
  Quantity:any;
  quantity:any;
  productimage:any;
  Username:any;
   show:any;
  constructor( private http:HttpClient,private router:Router, private activatedroute : ActivatedRoute) { 

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
    this.activatedroute.queryParams.subscribe(params =>{
      this.productId = params['id'];
      // this.initialiseState();

      // this.productname = params['id'];
    })  
  }

  ngOnInit() {
    

    // 3
    console.log("app dinings")
    this.cart_URL = "http://localhost:8080/cart";
    //  console.log("here")
  //  this.tp = 
   localStorage.removeItem('Productid');
  //   sessionStorage.setItem('productid',this.productId)
     this.jsonstring=
     {
       if(Username){
  
       }
      //    "productid":this.productId,
    
      //  "Username":localStorage.getItem('Username'),
     };
     this.http.post(this.cart_URL, this.jsonstring,
      {
      headers: { 'Content-Type': 'application/json'}
      }
      ).subscribe(
        data => {
        this.response = data;

        console.log("response" , this.response);
        // console.log(this.response.productimage);
        
            if(!(localStorage.getItem('Username'))){
              alert("User has to login");
              this.router.navigateByUrl('/applogin');
          }
         
        if (this.response.STOCK<1){
        this.response.STOCK = "Stock not available";
        // document.getElementById("amt1").style.display
        }


  
          });

        
        
  }
  cart(){
  
     
    console.log(this.response.STOCK)
          if(this.response.STOCK=="0"){
            document.getElementById('errormessage').style.display='block';
            // return null;
          }
          else{
          
    if(!this.select){
      console.log(this.select)
      this.select = 1;
      console.log(this.select)
    }
    
 
    this.router.navigateByUrl('/appaddcart');
  


  this.prod_Url = "http://localhost:8080/cartuser";

    console.log(this.productId)
    console.log(this.select)

   
       this.jsonstring={
 
     "productid":this.productId,
      "Username":localStorage.getItem('Username'),
      "Quantity": this.select,
        
      
       };
       
       this.http.post(this.prod_Url, this.jsonstring,
        {
        headers: { 'Content-Type': 'application/json'}
        }
        ).subscribe(
          data => {
          this.response = data;
           
          // "productname":this.productname,
        // this.image = this.productimage;
        // this.image = data
    
         localStorage.setItem('productid','PRODUCT_ID');
         
        //    if(this.response.status == "success")
        // {   
        // //  alert('Added successfully to cart');
           
        //     }
      
    });
  }
  
      
    }

 check(n,m){

  if(!this.select){
    console.log(this.select)
    this.select = 1;
    console.log(this.select)
  }
  
  console.log("apppayment?name="+n+"&price=" +m+"&select="+this.select)
  this.router.navigateByUrl("apppayment?name="+n +"&price=" +m +"&select="+this.select);
  
 }


update(){
  this.update_url= "http://localhost:8080/update";
  if(!this.select){
    console.log(this.select)
    this.select = 1;
    console.log(this.select)
  }
  this.jsonstring={
 
    "productid":this.productId,
    //  "Username":localStorage.getItem('Username'),
     "Quantity": this.select,
       
     
      };
      console.log(this.productId);
      console.log(this.select)
      this.http.post(this.update_url, this.jsonstring,
        {
        headers: { 'Content-Type': 'application/json'}
        }
        ).subscribe(
          data => {
          this.response = data; 
          console.log(this.response)
       
        
        });
}






}

