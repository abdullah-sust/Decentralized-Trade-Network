import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Person } from '../org.bjitgroup.com';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class PersonService {

	
		private NAMESPACE: string = 'Person';
	



    constructor(private dataService: DataService<Person>) {
    };

    public getAll(): Observable<Person[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getparticipant(id: any): Observable<Person> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addParticipant(itemToAdd: any): Observable<Person> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateParticipant(id: any, itemToUpdate: any): Observable<Person> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteParticipant(id: any): Observable<Person> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
