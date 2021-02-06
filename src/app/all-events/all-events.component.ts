import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../event'

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

  constructor(private http: HttpClient, private eventService: EventService) {}

  ngOnInit(): void {
    this.getAll();
    // this.getAllfromDB();
  }

  async getAll() {
    this.eventList = this.getAllEventsFromJSON();
  }

  getAllEventsFromJSON() {
    return this.http.get('/assets/events/events.json');
  }

  getDetail(event: Event) {
    // console.log(event);
    // this.eventDetail = event;
    // window.location.replace('/events/detail');
    // return this.eventDetail;

    const headers = { 'content-type': 'application/json'}
    const body = event;
    console.log(body)
    return this.http.post('/events/detail', body,{'headers':headers})

  }

  // ++++++++++++++++++++++++++++++++++++++++++++
  // wenn wir dummy date aus der DB wollen
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
