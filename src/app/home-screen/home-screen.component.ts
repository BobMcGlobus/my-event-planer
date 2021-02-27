import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { WebNotificationService } from 'src/app/web-notification.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  permission: NotificationPermission | null = null;

  constructor(
    private webNotificationService: WebNotificationService
  ) { }

  ngOnInit(): void {
    this.permission = this.webNotificationService.isEnabled ? Notification.permission : null;
  }

  //adding a customized install button
  //code snippet (adapted) from https://levelup.gitconnected.com/pwa-add-button-to-home-screen-and-remote-debugging-in-android-devices-with-angular-8-3dbaec772a1
  deferredPrompt: any;
  showButton = false;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    this.deferredPrompt = e;
    this.showButton = true;
  }

  install() {
      // hide A2HS button
      this.showButton = false;
      // Show the prompt
      this.deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
      .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
        //if the user decides to install the button disappears
        const btnInstall = document.getElementById("btnInstall");
        btnInstall.style.display = "none";
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      this.deferredPrompt = null;
    });
  }

  //firering the submit to notification event after button click
  submitNotification() {
    this.webNotificationService.subscribeToNotifications()
      .then(() => this.permission = Notification.permission);
  }

}
