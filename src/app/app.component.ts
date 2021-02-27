import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-event-planer';

  constructor(
    private swUpdate: SwUpdate,
    ) {}

  //informing the user if a newer version is available;
  //code snippet (adapted) from https://angular-buch.com/blog/2019-07-progressive-web-app

   ngOnInit() {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe((e) => {
        const updateAvailability = window.confirm(`
          Update available!
          Do you want to install it?
        `);
        if (updateAvailability) { window.location.reload(); }
      });
    }
  }
}

