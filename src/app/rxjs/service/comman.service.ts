import { HttpClient } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  exclusive = new Subject<boolean>();
  // userName = new Subject<string>(); 
  userName = new BehaviorSubject<string>("Divya Prakash");
  videoEmit = new ReplaySubject<string>(3, 5000); // 3 denotes that 3 previous items needed and 5000 denotes that user can get value if it is emitted within 5 seconds

  asyncVideoEmit = new AsyncSubject<string>();

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


