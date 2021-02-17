import { AddEventService } from '../add-event.service';
import { Component, OnInit } from '@angular/core';
import {DateRange} from '@angular/material/datepicker';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {
selectedValue = '';
  constructor(private addEventService: AddEventService) {

  }


  ngOnInit(): void {
    // this.getAll();
  }

  async add(title: string,
            date: DateRange<any>,
            location: string,
            description: string,
            category: string,
            image: string,
            type: string): Promise<any>{
    console.log(date);
    await this.addEventService.add(title, date , location, description, category, image, type);
  }

}
