import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {

  }
  logOut(){
    this.router.navigate(['/log-in'])
  }

  account(){
    this.router.navigate(['/account']);
  }

  dashboard(){
    this.router.navigate(['/home']);
  }

  weeklyReport(){
    this.router.navigate(['/activities']);
  }

  calendar(){
    this.router.navigate(['/calendar']);
  }

  formsAndReports(){
    this.router.navigate(['/forms-and-reports'])
  }
}
