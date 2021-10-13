import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calendar-add-event',
  templateUrl: './calendar-add-event.page.html',
  styleUrls: ['./calendar-add-event.page.scss'],
})
export class CalendarAddEventPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addEvent(){
    this.router.navigate(['/calendar']);
  }
}
