import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Configuration }     from './configuration';
import { DataService }     from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ProductComponent } from './Product/Product.component';


  import { PersonComponent } from './Person/Person.component';


  import { productTransferComponent } from './productTransfer/productTransfer.component';  
@NgModule({
  declarations: [
    AppComponent,
		HomeComponent,
    // TransactionComponent,
    
    ProductComponent
    ,
    
    
      PersonComponent
      ,

    
        productTransferComponent
          
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
