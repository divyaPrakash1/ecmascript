import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-coding-task',
  templateUrl: './main-coding-task.component.html',
  styleUrl: './main-coding-task.component.scss'
})
export class MainCodingTaskComponent {


  items: Array<{ title: string, link: string }> = [
    { title: 'Form Component', link: 'form-component' },
  ];
}
