import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Event } from './event';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AddEventService extends Dexie {
  events: Dexie.Table<Event, string>;
  constructor() {
    super('personalEvents');
    this.version(1).stores({
      events: 'id, date, location'
    });

   }

    add(title: string,
        start: Date,
        end: Date,
        location: string,
        description: string,
        category: string,
        image: string,
        type: string): Promise<any>{
        const id: string = uuidv4();

      console.log('test');
      return this.events.add({id, title, start, end, location, description, category, image, type});
    }

    getAll(): Promise<Event[]>{
      return this.events.toArray();
    }

}
