import { Component, OnInit } from '@angular/core';
import { CalendarConfig, DayC, Day } from  'material-calendar';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})



export class CalenderComponent implements OnInit {

      calendarConfig: CalendarConfig = {
      renderMode: 'monthly', // 'annual' | 'monthly'
      selectMode: 'range',  // 'click' | 'range'
      displayYear: false,
      firstDayOfWeekMonday: true,
      calendarWeek: true,
      switches: true,
    }

  dataSource: DayC[] = [
    {
      date: 1604185200000,
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
      toolTip: 'Test ToolTip',
      badgeMode: 'Icon',
      badgeInt: 5,
      badgeIcon: 'edit'
    },
    {
      date: 1604199900000,
      backgroundColor: 'blue'
    }
  ]
  constructor() {
  }

  ngOnInit(): void {
  }

  testMethod(){
    console.log('hallo');
  }
}
