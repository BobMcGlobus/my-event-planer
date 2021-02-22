import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-event-planer';

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((e) => {
        const updateApp = window.confirm(`
          Update available.
          Do you want to install it?
        `);
        if (updateApp) { window.location.reload(); }
      });
    }
  }
}




