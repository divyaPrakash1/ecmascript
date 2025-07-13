import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  exclusive = new Subject<boolean>();
  // userName = new Subject<string>(); 
  userName = new BehaviorSubject<string>("Divya Prakash");
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private apiCall: HttpClient) { }

  print(val: string, containerId: string) {
    if (typeof document !== 'undefined') {
      let el = document.createElement('li');
      el.innerText = val;
      document.getElementById(containerId)?.appendChild(el)
    }
  }

  fetchDetails(): Observable<any> {
    return this.apiCall.get('https://jsonplaceholder.typicode.com/users')
  }
}


