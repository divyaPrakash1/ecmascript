import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrl: './custom-pipe.component.scss'
})
export class CustomPipeComponent {

  row1: string = 'This is the string that will capitalize first letter for all words';
  row2: string = 'This is the string that will small first and last letter for all words';
  row3: string = 'This is the string that will capitalize for all words';
  row4: string = 'This is the string that where all words concatenate with underscore'

}
