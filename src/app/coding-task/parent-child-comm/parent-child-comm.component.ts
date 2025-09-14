import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'ecmspt-parent-child-comm',
  templateUrl: './parent-child-comm.component.html',
  styleUrl: './parent-child-comm.component.scss'
})
export class ParentChildCommComponent {

  dataToChild: string = 'This is test data to child';

  dataFromChild: string = '';


  recieveFromChild(data: string) {
    this.dataFromChild = data;
  }

}
