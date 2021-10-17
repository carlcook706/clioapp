import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http: HttpClient) { }

  logIn(data){
    return this.http.post('http://localhost/CLIO/backend/login.php',data)
  }
  getHome(data){
    return this.http.post('http://localhost/CLIO/backend/getHome.php',data)
  }
}

