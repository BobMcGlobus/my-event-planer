import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Event } from './event';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class EventService extends Dexie {
  events: Dexie.Table<Event, string>;
  eventArray: Array<Event>;

  constructor() {
    super('externalEvents');

    this.version(1).stores({
      events: 'id, date, location',
    });
  }

  getAll(): Promise<Event[]> {
    return this.events.toArray();
  }

  async addData(): Promise<any> {
    const start1 = new Date('December 17, 2021 16:00:00');
    const id1: string = uuidv4();

    const start2 = new Date('November 12, 2021 12:00:00');
    const end2 = new Date('November 18, 2021 12:00:00');
    const id2: string = uuidv4();

    const start3 = new Date('July 5, 2021 12:00:00');
    const id3: string = uuidv4();

    const start4 = new Date('March 1, 2022 15:00:00');
    const id4: string = uuidv4();

    const start5 = new Date('February 25, 2022 09:00:00');
    const end5 = new Date('February 25, 2025 09:00:00');
    const id5: string = uuidv4();

    this.eventArray = [
      {
        id: id1,
        title: 'Papa Roach Concert',
        start: start1,
        end: null,
        location: 'SAP Arena Mannheim',
        description: 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.',
        category: '',
        image: 'assets/icons/icon-72x72.png',
        type: 'external',
      },
      {
        id: id2,
        title: 'Felix Lobrecht',
        start: start2,
        end: end2,
        location: 'Mosbach Theatre',
        description: 'In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable.',
        category: '',
        image: 'assets/icons/icon-72x72.png',
        type: 'external',
      },
      {
        id: id3,
        title: 'Tag der offenen Tür',
        start: start3,
        end: null,
        location: 'NKG Mosbach',
        description: 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.',
        category: '',
        image: 'assets/icons/icon-72x72.png',
        type: 'external',
      },
      {
        id: id4,
        title: 'Dance Party',
        start: start4,
        end: null,
        location: 'Das Dock',
        description: 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.',
        category: '',
        image: 'assets/icons/icon-72x72.png',
        type: 'external',
      },
      {
        id: id5,
        title: 'Mars Landing',
        start: start5,
        end: end5,
        location: 'Mars',
        description: 'Another journeys chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.',
        category: '',
        image: 'assets/icons/icon-72x72.png',
        type: 'external',
      },
    ];
    await this.events.clear().then(() => {
      this.eventArray.forEach( event => this.events.add(event));
    });

  }
}
