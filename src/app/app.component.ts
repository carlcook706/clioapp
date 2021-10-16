import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public toastCtrl: ToastController,private storage: Storage,private router: Router) {

  }
  async logOut(){
    this.router.navigate(['/log-in'])
    this.storage.create();
    this.storage.clear();

    const toast = await this.toastCtrl.create({
      message: 'Log out Succesfully.',
      duration: 2000
    });

    toast.present();
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
