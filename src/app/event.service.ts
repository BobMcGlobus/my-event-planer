import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Event } from './event';

@Injectable({
  providedIn: 'root',
})
export class EventService extends Dexie {
  events: Dexie.Table<Event, number>;

  constructor() {
    super('EventDB');

    this.version(1).stores({
      events: "++id, date, location, participans",
    });
  }

  getAll(): Promise<Event[]> {
    return this.events.toArray();
  }

  addData(): Promise<any> {

    return this.events.add(
      { title: 'Papa Roach Concert',
        description: 'Another journey chamber',
        date: "2021-03-19",
        location: 'SAP Arena',
        image: 'assets/icons/icon-72x72.png',
        participans: ['ON19'],
        visited: false,
      }
    );
  }
}
