import { EventformComponent } from './eventform/eventform.component';
import { EventoverviewComponent } from './eventoverview/eventoverview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: EventoverviewComponent},
  {path: 'new', component: EventformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
