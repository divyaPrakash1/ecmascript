import { Component } from '@angular/core';

@Component({
  selector: 'ecmspt-main-coding-task',
  templateUrl: './main-coding-task.component.html',
  styleUrl: './main-coding-task.component.scss'
})
export class MainCodingTaskComponent {


  items: Array<{ title: string, link: string }> = [
    { title: 'Form Component', link: 'form-component' },
    { title: 'Directive', link: 'directive' },
    { title: 'Custom Pipe', link: 'custom-pipe' },
    { title: 'New NgFor', link: 'new-ng-for' },
    { title: 'Content Projection', link: 'content-projection' },
    { title: 'Search Switch Map', link: 'search-switch-map' },
  ];
}
