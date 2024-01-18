import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router, RouterLink, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-diningdetails',
  templateUrl: './diningdetails.component.html',
  styleUrls: ['./diningdetails.component.css']
})
export class DiningdetailsComponent implements OnInit {


  cart_URL :any;
  prod_Url :any;
  
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
  productimage:any;
  tp:any;
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
    
    console.log("app dinings")
    this.cart_URL = "http://localhost:8080/cart";
    //  console.log("here")
  //  this.tp = 
   localStorage.removeItem('Productid');
  //   sessionStorage.setItem('productid',this.productId)
     this.jsonstring=
     {
         "productid":this.productId,
        // "productid": localStorage.setItem('productid',this.productId),
        // "productid1": sessionStorage.setItem('productid',this.productId),
        
       "Username":localStorage.getItem('Username'),
       // "stock" : localStorage.getItem("stock"),
       // "stock":localStorage.getItem("Stock")
     //  "inr": sessionStorage.getItem('inr'),
   
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


        });
        console.log(this.response.STOCK)
          if(this.response.STOCK==0){
            return null;
          }
          else{
            return this.stock;
          } 
  }
  cart(){
    
    // if(!(this.selected)){
    //       document.getElementById("addbtn").style.display="block";
    //     }
    //     else{
    //       document.getElementById("addbtn").style.display="none";
    //     }

    if(!this.select){
      console.log(this.select)
      this.select = 1;
      console.log(this.select)
    }
    
    // alert("Your order has been placed successfully");
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
         
           if(this.response.status == "success")
        {   
        //  alert('Added successfully to cart');
           
            }
      
    });
      
    }

//  check(){
//   localhost:8080/update
//  }









}
