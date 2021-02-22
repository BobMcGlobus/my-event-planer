import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NavigationComponent } from './navigation/navigation.component';
import { EventformComponent } from './eventform/eventform.component';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';


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
import { MatGridListModule } from '@angular/material/grid-list';
import {DatePipe} from '@angular/common';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { PersonalEventsComponent } from './personal-events/personal-events.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';

registerLocaleData(localeDe, 'de');

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    EventformComponent,
    AllEventsComponent,
    DeleteEventComponent,
    DetailEventComponent,
    PersonalEventsComponent,
    HomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    HttpClientModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    DateTimePickerModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'de' }, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
