import { NgModule, LOCALE_ID  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalenderComponent } from './calender/calender.component';
import { MaterialCalendarModule } from 'material-calendar';

@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialCalendarModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
