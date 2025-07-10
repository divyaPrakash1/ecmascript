import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  print(val: string, containerId: string) {
    if (typeof document !== 'undefined') {
      let el = document.createElement('li');
      el.innerText = val;
      document.getElementById(containerId)?.appendChild(el)
    }
  }
}
