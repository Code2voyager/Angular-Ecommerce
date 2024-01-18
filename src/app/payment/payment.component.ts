import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Router,RouterLink, ActivatedRoute } from '@angular/router';
// import { isInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
// import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  jsonstring: any;
  response: any;
  response1: any;
  Response:any;
  price=[];
  name:any;
  total=0;
  PRODUCT_NAME:any;
  PRICE:any;
  totalamount:number=0;
  i:any;
  // response.PRODUCT_ID;
  status:any;
  Quantity:any;
  product :any;
  // price:any;
  username =  localStorage.getItem('Username');
  str1 = "http://localhost:8080/getcart/";
  str2=this.str1.concat(this.username);
  proddelete = "http://localhost:8080/proddelete";



 
  constructor(private http:HttpClient, private router:Router,private activatedroute : ActivatedRoute) { 
  this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
  this.activatedroute.queryParams.subscribe(params =>{
    this.PRODUCT_NAME = params['name'];
    console.log(this.PRODUCT_NAME)
    this.PRICE = params['price'];
    console.log(this.PRICE)
    this.Quantity = params['select'];
    console.log(this.Quantity)
    // this.initialiseState();

    // this.productname = params['id'];
  })
  }
  
  ngOnInit() {
    if(!this.PRODUCT_NAME){
  this.http.get( this.str2, {headers: { 'Content-Type': 'application/json' }
}).subscribe(data => {
this.response = data;
  // product: this.response.PRODUCT_NAME;

//  console.log(this.response[0].count)
 for(var i =0 ; i<this.response[0].count ;i++)
 {
   var totalprice =this.response[i].PRICE*this.response[i].Quantity
 this.total +=totalprice;
 };
 console.log(this.total)
 return this.total;

});
    }
    else if(this.PRODUCT_NAME){
      this.response={
 
        "PRODUCT_NAME":this.PRODUCT_NAME,
        "Quantity" : this.Quantity,
         "PRICE": this.PRICE,
          };
        var totalprice = this.PRICE* this.Quantity;
        console.log(totalprice)
       this.total += totalprice;  
          
      // this.response.PRODUCT_NAME = this.PRODUCT_NAME;
      // this.response.PRICE = this.PRICE; 

    }
  }

  proceed(){
 
   
  this.jsonstring={
  
    "Username":this.username
  }
  console.log(this.username)

  this.http.post(this.proddelete, this.jsonstring,
    {
    headers: { 'Content-Type': 'application/json'}
    }
    ).subscribe(
      data => {
      this.response = data;
      console.log(this.response)
      if(this.response.status=="valid"){
   
      //  document.getElementById('productdel').style.display="none";
       this.router.navigateByUrl('/appbody');
       
       
    }
    
    // else{
    //   document.getElementById('productdel').style.display="block";
    // }
      });
    
    
  }

}
