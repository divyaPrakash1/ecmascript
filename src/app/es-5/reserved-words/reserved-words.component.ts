import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecmspt-reserved-words',
  templateUrl: './reserved-words.component.html',
  styleUrl: './reserved-words.component.scss'
})
export class ReservedWordsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    
  }

  // ECMAScript 5 Reserved Words
  // break
  // case
  // catch
  // continue
  // debugger
  // default
  // delete
  // do
  // else
  // finally
  // for
  // function
  // if
  // in
  // instanceof
  // new
  // return
  // switch
  // this
  // throw
  // try
  // typeof
  // var
  // void
  // while
  // with

  // Future Reserved Words(ES5)
  // class
  // const
  // enum
  // export
  // extends
  // import
  // super

  // Keywords Reserved in Strict Mode
  // implements
  // interface
  // let
  // package
  // private
  // protected
  // public
  // static
  // yield

}
