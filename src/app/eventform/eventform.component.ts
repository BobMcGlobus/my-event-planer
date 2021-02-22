import { AddEventService } from '../add-event.service';
import { Component, OnInit } from '@angular/core';

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
            start: Date,
            end: Date,
            location: string,
            description: string,
            category: string): Promise<any>{

    if (category.length == 0){
        category = 'other';
    }

    if(title.length != 0 && start.getDate != null && end.getDate != null){
        await this.addEventService.add(title, start, end, location, description, category, '');}
    else{
        console.log('Please check if there is an input missing!');
    }
  }

}
