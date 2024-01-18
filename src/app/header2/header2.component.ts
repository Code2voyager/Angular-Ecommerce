import { Component, OnInit ,Pipe, PipeTransform} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
// import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms' 
@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})

@Pipe({ name: "filter" })
export class Header2Component implements OnInit {

//  search_url = "http://localhost:8080/search";
search_url:any;
  jsonstring: any;
  response: any;
  product : any;
  inr:any;
  name = "Welcome!";
  status:any;
  itemname:any;
  item:any;
  ListItem : any;
  searchItem:any;
  itemFound: any;
  filteredList:any;

  constructor( private http:HttpClient,private router: Router) { 

  }

  ngOnInit() {
    if(localStorage.getItem("Username")){
    document.getElementById("logoutB").style.display="block";
    document.getElementById("loginB").style.display="none"
    }
    // var  username = sessionStorage.getItem("Username");
    
    // this.name = localStorage.getItem("Username");
    //  this.product = sessionStorage.getItem("Productname");
    // this.inr = sessionStorage.getItem("inr");

    if(localStorage.getItem("Username")){
     this.name= localStorage.getItem("Username");
     
    }
    else {
      // this.router.navigateByUrl("/appheader");
      
    }
     this.search_url="http://localhost:8080/getp"
     this.http.get(this.search_url).subscribe(data => {
      this.ListItem= data;
      console.log(this.ListItem)
     });
    // searchItem
  }

   
  

    logout()
    {
      localStorage.clear();
      document.getElementById("logoutB").style.display="none";
      document.getElementById("loginB").style.display="block"
      this.router.navigate(['appbody']);
    }
//     search(itemname)
//     {
//       this.itemFound = this.ListItem.filter(
//         data => data.PRODUCT_NAME === this.searchItem);
// console.log(this.itemFound)
//       document.getElementById("searchB").style.display="block";
//     //   this.jsonstring={
//     //     "item":this.itemname,
//     //   }
//     //   this.http.get(this.search_url, {headers: { 'Content-Type': 'application/json' }
//     // }).subscribe(data => {
//     // this.response = data;
//     // console.log(this.response);
//     //  this.router.navigate('/')
       
//     // });
//     }

search(searchItem){
  
  document.getElementById("searchB").style.display="block";
  if (!this.ListItem)
  return [];
if (!searchItem)
  return this.ListItem;
let filteredList = [];
if (this.ListItem.length > 0) {
  searchItem = searchItem.toLowerCase();
  this.ListItem.forEach(item => {
    //Object.values(item) => gives the list of all the property values of the 'item' object
    // let propValueList = Object.values(item);
    // for(let i=0;i<propValueList.length;i++)
    // {
      let propValueList = item.PRODUCT_NAME;
      if (propValueList) {
        if (propValueList.toString().toLowerCase().indexOf(searchItem) > -1)
        {
          filteredList.push(item);
          // break;
        }
      }
    // }
  });
}
this.filteredList = filteredList;
console.log( this.filteredList);

}


clearsearch(){
  document.getElementById("searchB").style.display="none";
}

pages(x){
  console.log('appDiningdetails?id='+x.PRODUCT_ID)
  this.router.navigateByUrl('/appDiningdetails?id='+x.PRODUCT_ID); 
}

}

