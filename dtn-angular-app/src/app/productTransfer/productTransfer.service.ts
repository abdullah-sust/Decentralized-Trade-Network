import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { productTransfer } from '../org.bjitgroup.com';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class productTransferService {

	
		private NAMESPACE: string = 'productTransfer';
	



    constructor(private dataService: DataService<productTransfer>) {
    };

    public getAll(): Observable<productTransfer[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getTransaction(id: any): Observable<productTransfer> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addTransaction(itemToAdd: any): Observable<productTransfer> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateTransaction(id: any, itemToUpdate: any): Observable<productTransfer> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteTransaction(id: any): Observable<productTransfer> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}

