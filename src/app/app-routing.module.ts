import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBodyComponent } from './app-body/app-body.component';


import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { AddcartComponent } from './addcart/addcart.component';
import { DiningdetailsComponent } from './diningdetails/diningdetails.component';
import { MenfashionComponent } from './menfashion/menfashion.component';
import { WomenfashionComponent } from './womenfashion/womenfashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { BooksComponent } from './books/books.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AccessoriesComponent } from './accessories/accessories.component';
// import { AppHeaderComponent } from './app-header/app-header.component';
import { Login1Component } from './login1/login1.component';
import { KidsComponent } from './kids/kids.component';
import { PaymentComponent } from './payment/payment.component';
import { Register1Component } from './register1/register1.component';
import { DetailsComponent } from './details/details.component';
import { RegsampleComponent } from './regsample/regsample.component';
import { SampleComponent } from './sample/sample.component';

import { TableComponent } from './table/table.component';
// import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path:'' ,component:AppBodyComponent},
  {path: 'appbody' ,component:AppBodyComponent},
  // {path: 'header' ,component:AppHeaderComponent}, 
   {path: 'appregister' ,component:RegisterComponent},
   {path: 'applogin' ,component:LoginComponent},
   {path: 'appkitchen' ,component:KitchenComponent},
   {path: 'appaddcart' ,component:AddcartComponent},
   {path: 'appDiningdetails' ,component:DiningdetailsComponent},
   {path:'appmenfashion',component:MenfashionComponent},
   {path: 'appwomenfashion',component: WomenfashionComponent},
   {path:'appfurniture',component:FurnitureComponent},
   {path:'appbooks',component:BooksComponent},
   {path:'appelectronics',component:ElectronicsComponent},
   {path:'appaccessories',component:AccessoriesComponent},
   {path:'applogin1',component:Login1Component},
   {path:'appkids',component:KidsComponent},
   {path:'apppayment',component:PaymentComponent},
   {path:'appregister1',component:Register1Component},
   {path:'appdetails',component:DetailsComponent},
   {path:'appregsample',component:RegsampleComponent},
   {path:'sample',component:SampleComponent},
 
   {path:'apptable',component: TableComponent}
  //  {path:'appcheckout',component:CheckoutComponent}
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingcomponent =[AppBodyComponent,SampleComponent,DetailsComponent,Register1Component,PaymentComponent,KidsComponent,Login1Component,RegisterComponent,LoginComponent,AddcartComponent,DiningdetailsComponent, WomenfashionComponent,MenfashionComponent,FurnitureComponent,BooksComponent,ElectronicsComponent,TableComponent]

