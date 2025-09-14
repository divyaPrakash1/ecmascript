import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from '../utils/service/utils.service';

@Component({
  selector: 'ecmspt-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.scss'
})
export class AsyncPipeComponent implements OnInit {

  products$!: Observable<string[]>;


  constructor(private _utilsService: UtilsService) { }


  ngOnInit(): void {
    this.products$ = this._utilsService.getAllProducts();
  }

}
