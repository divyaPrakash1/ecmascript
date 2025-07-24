import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Es11Component } from './es-11.component';
import { MainEs11Component } from './main-es-11/main-es-11.component';
import { BigintComponent } from './bigint/bigint.component';
import { StringMatchAllComponent } from './string-match-all/string-match-all.component';
import { NullishCoalescingComponent } from './nullish-coalescing/nullish-coalescing.component';
import { OptionalChainingComponent } from './optional-chaining/optional-chaining.component';
import { LogincalAndAssignmentOptrComponent } from './logincal-and-assignment-optr/logincal-and-assignment-optr.component';
import { LogincalOrAssignmentOptrComponent } from './logincal-or-assignment-optr/logincal-or-assignment-optr.component';
import { NullishCoalesAssigOptrComponent } from './nullish-coales-assig-optr/nullish-coales-assig-optr.component';

const routes: Routes = [
  {
    path: '',
    component: Es11Component,
    children: [
      { path: '', component: MainEs11Component },
      { path: 'bigint', component: BigintComponent },
      { path: 'string-match-all', component: StringMatchAllComponent },
      { path: 'nullish-coalescing', component: NullishCoalescingComponent },
      { path: 'optional-chaining', component: OptionalChainingComponent },
      { path: 'logical-and-assign', component: LogincalAndAssignmentOptrComponent },
      { path: 'logical-or-assign', component: LogincalOrAssignmentOptrComponent },
      { path: 'nullish-coalescing-assign', component: NullishCoalesAssigOptrComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Es11RoutingModule { }
