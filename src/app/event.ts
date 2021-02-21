import {DateRange} from '@angular/material/datepicker';

export class Event {
  id?: number;
  title: string;
  start: Date;
  end: Date;
  location: string;
  description: string;
  category: string;
  image: string;
  type: string;
}

// id?: number;
// type: string;
// title: string;
// description: string;
// date: string;
// location: string;
// image: string;
// participans: Array<string>;
// visited: boolean;
