import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { productTransferService } from './productTransfer.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-productTransfer',
	templateUrl: './productTransfer.component.html',
	styleUrls: ['./productTransfer.component.css'],
  providers: [productTransferService]
})
export class productTransferComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
	private errorMessage;

  
      
          ownerId = new FormControl("", Validators.required);
        
  
      
          newOwnerId = new FormControl("", Validators.required);
        
  
      
          productId = new FormControl("", Validators.required);
        
  
      
          product = new FormControl("", Validators.required);
        
  
      
          owner = new FormControl("", Validators.required);
        
  
      
          newOwner = new FormControl("", Validators.required);
        
  
      
          transactionId = new FormControl("", Validators.required);
        
  
      
          timestamp = new FormControl("", Validators.required);
        
  


  constructor(private serviceproductTransfer:productTransferService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          ownerId:this.ownerId,
        
    
        
          newOwnerId:this.newOwnerId,
        
    
        
          productId:this.productId,
        
    
        
          product:this.product,
        
    
        
          owner:this.owner,
        
    
        
          newOwner:this.newOwner,
        
    
        
          transactionId:this.transactionId,
        
    
        
          timestamp:this.timestamp
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceproductTransfer.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "org.bjitgroup.com.productTransfer",
      
        
          "ownerId":this.ownerId.value,
        
      
        
          "newOwnerId":this.newOwnerId.value,
        
      
        
          "productId":this.productId.value,
        
      
        
          "product":this.product.value,
        
      
        
          "owner":this.owner.value,
        
      
        
          "newOwner":this.newOwner.value,
        
      
        
          "transactionId":this.transactionId.value,
        
      
        
          "timestamp":this.timestamp.value
        
      
    };

    this.myForm.setValue({
      
        
          "ownerId":null,
        
      
        
          "newOwnerId":null,
        
      
        
          "productId":null,
        
      
        
          "product":null,
        
      
        
          "owner":null,
        
      
        
          "newOwner":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null
        
      
    });

    return this.serviceproductTransfer.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "ownerId":null,
        
      
        
          "newOwnerId":null,
        
      
        
          "productId":null,
        
      
        
          "product":null,
        
      
        
          "owner":null,
        
      
        
          "newOwner":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "org.bjitgroup.com.productTransfer",
      
        
          
            "ownerId":this.ownerId.value,
          
        
    
        
          
            "newOwnerId":this.newOwnerId.value,
          
        
    
        
          
            "productId":this.productId.value,
          
        
    
        
          
            "product":this.product.value,
          
        
    
        
          
            "owner":this.owner.value,
          
        
    
        
          
            "newOwner":this.newOwner.value,
          
        
    
        
          
        
    
        
          
            "timestamp":this.timestamp.value
          
        
    
    };

    return this.serviceproductTransfer.updateTransaction(form.get("transactionId").value,this.Transaction)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteTransaction(): Promise<any> {

    return this.serviceproductTransfer.deleteTransaction(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceproductTransfer.getTransaction(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "ownerId":null,
          
        
          
            "newOwnerId":null,
          
        
          
            "productId":null,
          
        
          
            "product":null,
          
        
          
            "owner":null,
          
        
          
            "newOwner":null,
          
        
          
            "transactionId":null,
          
        
          
            "timestamp":null 
          
        
      };



      
        if(result.ownerId){
          
            formObject.ownerId = result.ownerId;
          
        }else{
          formObject.ownerId = null;
        }
      
        if(result.newOwnerId){
          
            formObject.newOwnerId = result.newOwnerId;
          
        }else{
          formObject.newOwnerId = null;
        }
      
        if(result.productId){
          
            formObject.productId = result.productId;
          
        }else{
          formObject.productId = null;
        }
      
        if(result.product){
          
            formObject.product = result.product;
          
        }else{
          formObject.product = null;
        }
      
        if(result.owner){
          
            formObject.owner = result.owner;
          
        }else{
          formObject.owner = null;
        }
      
        if(result.newOwner){
          
            formObject.newOwner = result.newOwner;
          
        }else{
          formObject.newOwner = null;
        }
      
        if(result.transactionId){
          
            formObject.transactionId = result.transactionId;
          
        }else{
          formObject.transactionId = null;
        }
      
        if(result.timestamp){
          
            formObject.timestamp = result.timestamp;
          
        }else{
          formObject.timestamp = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "ownerId":null,
        
      
        
          "newOwnerId":null,
        
      
        
          "productId":null,
        
      
        
          "product":null,
        
      
        
          "owner":null,
        
      
        
          "newOwner":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
  }

}

