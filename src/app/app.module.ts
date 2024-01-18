import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';



// import { productcomponent } from './product.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppBodyComponent } from './app-body/app-body.component';


import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { ResponseComponent } from './response/response.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { AddcartComponent } from './addcart/addcart.component';
import {MatDialogModule} from '@angular/material/dialog';
import { Header2Component } from './header2/header2.component';
import { DiningdetailsComponent } from './diningdetails/diningdetails.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { WomenfashionComponent } from './womenfashion/womenfashion.component';
import { MenfashionComponent } from './menfashion/menfashion.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { BooksComponent } from './books/books.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { Login1Component } from './login1/login1.component';
import { KidsComponent } from './kids/kids.component';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatStepperModule} from '@angular/material/stepper';
// import { AccumulationChartModule } from '@syncfusion/ej2-angular-charts';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';

import { PaymentComponent } from './payment/payment.component';
import { Register1Component } from './register1/register1.component';
import { DetailsComponent } from './details/details.component';
import { CheckpaymentComponent } from './checkpayment/checkpayment.component';
import { RegsampleComponent } from './regsample/regsample.component';
import { SampleComponent } from './sample/sample.component';

import { TableComponent } from './table/table.component';
import {MatTabsModule} from '@angular/material/tabs';

// import { Location } from '@angular/common';







@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    routingcomponent,
    AppBodyComponent,
    
    RegisterComponent,
    LoginComponent,
   
    KitchenComponent,
    AddcartComponent,
    Header2Component,
    DiningdetailsComponent,
    WomenfashionComponent,
    MenfashionComponent,
    FurnitureComponent,
    BooksComponent,
    ElectronicsComponent,
    AccessoriesComponent,
    Login1Component,
    KidsComponent,
  
    PaymentComponent,
  
    Register1Component,
  
    DetailsComponent,
  
    CheckpaymentComponent,
  
    RegsampleComponent,
  
    SampleComponent,
  
  
  
    TableComponent,
 
    
  
   
    
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    Ng2SearchPipeModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatStepperModule,
    MatSidenavModule
    // FormFieldModule
    // Location
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

