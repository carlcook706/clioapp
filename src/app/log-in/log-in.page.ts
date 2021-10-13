import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  username : any;
  password : any;
  dataUser : any;

  constructor(private storage: Storage, private router: Router, public _apiService : ApiService) { }

  ngOnInit() {
    this.storage.create();
  }
  
  logIn(){
    let data = {
      username : this.username,
      password : this.password

    }
    this._apiService.logIn(data).subscribe((res:any) => {
      console.log("SUCCESS ===",res);

      this.storage.set('session_storage', res.result);

      this.storage.get('session_storage').then((res)=>{
        this.dataUser = res;
        
        console.log("Datauser==",this.dataUser.username);
        console.log("Datauserpass==",this.dataUser.password);
      });
      console.log("SUCCESS ===",res);

      this.router.navigate(['/home']);
    },(error:any) => {
      console.log("ERROR ===", error);
    }
    )
    
  }

  forgotPassword(){
  
  }
}
