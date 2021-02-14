import { AddEventService } from './../add-event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {

  constructor(private addEventService: AddEventService) {

  }

  ngOnInit(): void {
    //this.getAll();
  }

  async add(title: string, date: Date, location: string, description: string){
    await this.addEventService.add(title, date, location, description);
  }

}
