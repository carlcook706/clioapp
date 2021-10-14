import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  datauser : any;
  username : any;


  constructor(private storage: Storage) {
    this.storage.create();
    this.storage.get('session_storage').then((res)=>{
      this.datauser = res;
      
      
      this.username = this.datauser.username;
    });
  }

  companyInfo(){
    
  }
}
