import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css'],
})
export class DetailEventComponent implements OnInit {
  public eventDetail: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail() {
    this.eventDetail =  this.http.get('events/all');
    console.log(this.eventDetail)
  }

  async showDetail() {
  }
}
