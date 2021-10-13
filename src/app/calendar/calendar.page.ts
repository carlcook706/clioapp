import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {



    eventSource = [];

    calendar ={
      mode: 'month',
      currentDAte: new Date()
    }
    constructor(private router: Router) { }

    ngOnInit(){
    }

    addEvent(){
      this.router.navigate(['/calendar-add-event']);
    }

    onEventSelected(){

    }

    onViewTitleChanged(){

    }

    onTimeSelected(){

    }

}
