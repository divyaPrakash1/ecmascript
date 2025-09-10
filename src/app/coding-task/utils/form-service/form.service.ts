import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) {

  }

  getAllPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }


  getStatesWithDistrict(): Observable<any> {
    // return this.http.get('https://restindia.herokuapp.com/state/all')
    return this.http.get<any[]>('./../../../assets/india_states_districts.json');
    // .subscribe(data => {
    //   this.states = data;
    // });
  }



}
