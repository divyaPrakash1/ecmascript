import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent implements OnInit {
  promiseVal: string = '';
  
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }

  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'silver'
  }

  notAvailable = {
    brand: 'Not Available',
    status: 'Falied',
  }
  
  isDellAvailable() {
    return true;
  }



  isHpAvailable() {
    return true;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is Resolve');
      // resolve('Promise is Reject');
      if (this.isDellAvailable()) {
        setTimeout(() => {
          // resolve('Dell Purchased');
          resolve(this.dell);
        }, 5000);
      } else if (this.isHpAvailable()) {
        setTimeout(() => {
          // resolve('Hp Purchased');
          resolve(this.hp);
        }, 7000);
      } else {
        setTimeout(() => {
          // reject('Laptop is not available on store');
          reject(this.notAvailable);
        });
      }
    })
    buyLaptop.then((res: any) => {
      console.log('Success :- ', res);
      this.promiseVal = res;
    }).catch((res: any) => {
      console.log('Reject :- ', res);
    });
  }

  myFunction() {
    console.log('myFunction called');
  }


  // Promise: 
  //   1. async
  //   2. Return single value
  //     - resolve(Yes)
  //     - rejects(No)
  // Observable: 
  //   1. async or sync
  //   2. Return stream of value
  //     --------0--------0----------0-------
}
