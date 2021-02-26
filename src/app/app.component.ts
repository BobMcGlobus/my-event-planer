
import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { WebNotificationService } from './shared/web-notification.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-event-planer';
  permission: NotificationPermission | null = null;

  constructor(
    private swUpdate: SwUpdate,
    private webNotificationService: WebNotificationService
    ) {}

    ngOnInit() {
      // ...
      this.permission = this.webNotificationService.isEnabled ? Notification.permission : null;
    }

    submitNotification() {
      this.webNotificationService.subscribeToNotifications()
        .then(() => this.permission = Notification.permission);
    }

  //informing the user if a newer version is available;
  //code snippet (adapted) from https://angular-buch.com/blog/2019-07-progressive-web-app

  // ngOnInit() {
  //  if (this.swUpdate.isEnabled) {
  //    this.swUpdate.available.subscribe((e) => {
  //      const updateAvailability = window.confirm(`
  //        Update available!
  //        Do you want to install it?
  //      `);
  //      if (updateAvailability) { window.location.reload(); }
  //    });
  //  }
 // }

}
