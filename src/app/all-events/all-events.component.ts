import { EventService } from '../event.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../event';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css'],
})
export class AllEventsComponent implements OnInit {
  // todo Kommentare und nicht verwendetete Variablen entfernen
  events: Event[] = [];
  public eventList: any;
  public eventDetail: any;

  constructor(private http: HttpClient, private eventService: EventService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.getAll();
    // this.getAllfromDB();
  }

  getAll(): void{
    this.eventList = this.getAllEventsFromJSON();
  }

  getAllEventsFromJSON(): any{
    return this.http.get('/assets/events/events.json');
  }

  getDetail(event: Event): void{
    console.log(event);
    this.eventDetail = event;

    const title = document.getElementById('detail-title') as HTMLElement;
    title.innerHTML = event.title;

    const description = document.getElementById(
      'detail-description'
    ) as HTMLElement;
    description.innerHTML = event.description;

    const image = document.getElementById('detail-image') as HTMLImageElement;
    image.src = event.image;

    const subtitle = document.getElementById('detail-subtitle') as HTMLElement;
    subtitle.innerHTML = event.type;

    const location = document.getElementById('detail-location') as HTMLElement;
    location.innerHTML = event.location;

    const date = document.getElementById('detail-date') as HTMLElement;
    const dateTime = this.datePipe.transform(event.date, 'short');
    date.innerHTML = dateTime;

    const card = document.getElementById('detail-card') as HTMLElement;
    card.style.display = 'block';
  }


  // ++++++++++++++++++++++++++++++++++++++++++++
  // wenn wir dummy data aus der DB wollen
  // ++++++++++++++++++++++++++++++++++++++++++++

  // async getAllfromDB() {
  //   await this.eventService.addData();
  //   this.events = await this.eventService.getAll();
  // }

  // async addfromDB() {
  //   await this.eventService.addData();
  //   this.getAllfromDB();
  // }
}
