import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarAddEventPageRoutingModule } from './calendar-add-event-routing.module';

import { CalendarAddEventPage } from './calendar-add-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarAddEventPageRoutingModule
  ],
  declarations: [CalendarAddEventPage]
})
export class CalendarAddEventPageModule {}
