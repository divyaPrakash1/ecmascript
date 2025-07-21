import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ErrorService {


  handleError(err: HttpErrorResponse) {
    let errMsg: string = ''
    if (!err.error || !err.error.error) {
      console.log('Network Error');
      errMsg = 'Network Error'
    } else {
      console.log(err);
      errMsg = err.error.message;
    }

    return throwError(errMsg);
  }
}


