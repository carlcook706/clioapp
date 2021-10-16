import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datauser : any;
  username : any;
  homedata : any;

  constructor(public toastCtrl: ToastController,private storage: Storage, private router: Router, public _apiService : ApiService) {
    
  }

  ionViewWillEnter(){

    this.storage.create();
    this.storage.get('session_storage').then((res)=>{
      this.datauser = res;

      let data = {
        username : this.datauser.username
        
      }
      
      this._apiService.getHome(data).subscribe((res:any) => {
        console.log("SUCCESS ===",res);
        this.homedata = res;
        
  
      },(error:any) => {
        console.log("ERROR ===", error);
      }
      )


    });
  }
  companyInfo(){
    
  }
}
