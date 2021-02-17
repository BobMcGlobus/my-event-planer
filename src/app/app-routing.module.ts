import { EventformComponent } from './eventform/eventform.component';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonalEventsComponent} from './personal-events/personal-events.component';

const routes: Routes = [
  {path: 'events/new', component: EventformComponent},
  {path: 'events/all', component: AllEventsComponent},
  {path: 'events/delete', component: DeleteEventComponent},
  {path: 'events/detail', component: DetailEventComponent},
  {path: 'events/my-events', component: PersonalEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
