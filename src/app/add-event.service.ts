import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEventService {

  constructor() { }

    add(title: string, startdate: Date, enddate: Date, location: string, description: string): Promise<any>{
      //const id = uuidv4();
      return;
    }

}
