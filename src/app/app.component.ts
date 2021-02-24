import { HostListener, OnInit } from '@angular/core';
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
}
