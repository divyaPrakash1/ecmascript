import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent implements OnInit, AfterViewInit {
  promiseVal: any = '';

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
    return false;
  }

  isHpAvailable() {
    return false;
  }

  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolve')
      // reject('Promise is reject')
      // buyLaptop.then(res => {
      //   console.log('Success', res);
      // }).catch(res => {
      //   console.log("Error", res);
      // })
      if (this.isDellAvailable()) {
        resolve(this.dell)
      } else if (this.isHpAvailable()) {
        resolve(this.hp)
      } else {
        reject(this.notAvailable)
      }
    });

    buyLaptop.then(res => {
      console.log('res', res);
      this.promiseVal = res;
    }).catch(err => {
      this.promiseVal = err;
      console.log('Error ', err);
    })
  }

  isleaveApproved: boolean = true;


  practiceMethod() {
    const prms = new Promise((resolve, reject) => {
      if (this.isleaveApproved) {
        resolve('Go to trip')
      } else {
        reject('Back to work')
      }
    });

    prms.then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      console.log('All is Well') // It will always call, not depends on resolve/reject
    })
  }

  ngAfterViewInit(): void {
    this.practiceMethod();
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
