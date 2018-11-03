import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPres(){
    return this.http.get('https://presidents-server-side.herokuapp.com/api/home')
  }

  getPresAsc(){
    return this.http.get('https://presidents-server-side.herokuapp.com/api/asc')
  }

  getPresDesc(){
    return this.http.get('https://presidents-server-side.herokuapp.com/api/desc')
  }

}
