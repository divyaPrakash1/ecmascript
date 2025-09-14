import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {


  getAllProducts(): Observable<string[]> {
    return of(['Divya', 'Prakash', 'Mishra', 'Velocis']);
  }
}
