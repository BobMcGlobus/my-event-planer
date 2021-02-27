import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {DatePipe} from '@angular/common';
import { AddEventService } from '../add-event.service';

@Component({
  selector: 'app-personal-events',
  templateUrl: './personal-events.component.html',
  styleUrls: ['./personal-events.component.css']
})
export class PersonalEventsComponent implements OnInit {
  public eventDetail: Event;
  public privateEvent: any;
  constructor(private  datePipe: DatePipe,
              private addEventService: AddEventService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void{
    this.privateEvent = this.addEventService.getAll();
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
    switch (event.type) {
      case 'party':
        image.src = 'assets/event-pictures/party.jpg';
        break;
      case 'external':
        image.src = event.image;
        break;
      case 'other':
        image.src = 'assets/event-pictures/vacation.jpg';
        break;
      case 'activity':
        image.src = 'assets/event-pictures/activity.jpg';
        break;
      case 'trip':
        image.src = 'assets/event-pictures/trip.jpg';
        break;
      case 'private':
        image.src = 'assets/event-pictures/work-study.jpg';
        break;
      default:
        image.src = 'assets/event-pictures/default.jpg';
        break;
    }

    const subtitle = document.getElementById('detail-subtitle') as HTMLElement;
    subtitle.innerHTML = event.type;

    const location = document.getElementById('detail-location') as HTMLElement;
    location.innerHTML = event.location;

    const date = document.getElementById('detail-date') as HTMLElement;
    const dateTime = this.datePipe.transform(event.start, 'short');
    date.innerHTML = dateTime;
    if (event.end){
      const dateEnd = document.getElementById('detail-date-end') as HTMLElement;
      const dateTimeEnd = this.datePipe.transform(event.start, 'short');
      dateEnd.innerHTML = ' - ' + dateTimeEnd;
    }

    const card = document.getElementById('detail-card') as HTMLElement;
    card.style.display = 'block';
    this.mobileEventClass(true);
  }

  delete(id: string): void{
    if (confirm('Are you sure, you want to delete this event?')){
      this.addEventService.events.delete(id);
      const card = document.getElementById('detail-card') as HTMLElement;
      card.style.display = 'none';
      this.getAll();
    }else{
      console.log('nothing happens :)');
    }
  }

  mobileEventClass(con): void {

    if (con) {
      document.getElementById('event-grid').classList.add('mobileEventOpen');
    }else{
      document.getElementById('event-grid').classList.remove('mobileEventOpen');

    }
  }
}
