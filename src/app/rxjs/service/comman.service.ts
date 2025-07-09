import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  print(val: string, containerId: string) {
    // if(isPlatformBrowser(this.platformId)) {
    //   let el = document.createElement('li');
    //   el.innerText = val;
    //   document.getElementById(containerId)?.appendChild(el)
    // }
    if (typeof document !== 'undefined') {
      let el = document.createElement('li');
      el.innerText = val;
      document.getElementById(containerId)?.appendChild(el)
    }
    // if(isPlatformBrowser(this.platformId)) {
    //   let el = document.createElement('li');
    //   el.innerText = val;
    //   document.getElementById(containerId)?.appendChild(el)
    // }
  }
}
