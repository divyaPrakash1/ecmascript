import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { AsyncSubject, BehaviorSubject, catchError, Observable, ReplaySubject, Subject } from 'rxjs';
import { Posts, Product, Product1 } from '../interface/product.interface';
import { ErrorService } from './error.service';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  exclusive = new Subject<boolean>();
  // userName = new Subject<string>(); 
  userName = new BehaviorSubject<string>("Divya Prakash");
  videoEmit = new ReplaySubject<string>(3, 5000); // 3 denotes that 3 previous items needed and 5000 denotes that user can get value if it is emitted within 5 seconds

  asyncVideoEmit = new AsyncSubject<string>();

  private productsData: Product1[] = [
    { id: 1, name: 'Mouse', price: 25 },
    { id: 2, name: 'Keyboard', price: 45 },
  ];


  // exhaustMapSubject = new BehaviorSubject<number>(0);
  exhaustMapSubject = new BehaviorSubject<Product1[]>(this.productsData);
  // public products$: Observable<Product1[]> = this.exhaustMapSubject.asObservable();

  private apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private apiCall: HttpClient, private _errorService: ErrorService) { }

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



  getFilteredProducts(keyword: string): Observable<Product[]> { // title_like=/mouse/i

    const url = !!keyword ? `${this.apiUrl}/comments?name_like=${keyword}` : `${this.apiUrl}/comments`
    return this.apiCall.get<Product[]>(`${url}`);
  }

  addProduct(newProduct: Product1) {
    setTimeout(() => {
      const updated = [...this.exhaustMapSubject.value, newProduct];
      this.exhaustMapSubject.next(updated);
    }, 500);

  }

  getPosts(keyword: number): Observable<Posts[]> {
    const url = !!keyword ? `${this.apiUrl}/posts?userId=${keyword}` : `${this.apiUrl}/posts`
    return this.apiCall.get<Posts[]>(`${url}`).pipe(catchError(this._errorService.handleError));
  }

}


