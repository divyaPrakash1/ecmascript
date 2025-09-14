import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'ecmspt-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  @Input() dataFromParent!: string;
  @Output() emitToParent = new EventEmitter();




  @HostListener('click')
  onClick() {
    this.emitToParent.emit('This is data to Parent component from Child component');
  }

}
