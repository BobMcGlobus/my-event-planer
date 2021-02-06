import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllEventsComponent } from './all-events/all-events.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { DetailEventComponent } from './detail-event/detail-event.component';

// Kate
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    AllEventsComponent,
    DeleteEventComponent,
    DetailEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule

  ],
  providers: [{ provide: LOCALE_ID, useValue: "de" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
