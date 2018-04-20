import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { ProductComponent } from './Product/Product.component';


  import { PersonComponent } from './Person/Person.component';


  import { productTransferComponent } from './productTransfer/productTransfer.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Product', component: ProductComponent},
    
    
      { path: 'Person', component: PersonComponent},
      
      
        { path: 'productTransfer', component: productTransferComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
