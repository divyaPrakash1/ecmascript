import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Es11RoutingModule } from './es-11-routing.module';
import { Es11Component } from './es-11.component';
import { MainEs11Component } from './main-es-11/main-es-11.component';
import { BigintComponent } from './bigint/bigint.component';
import { StringMatchAllComponent } from './string-match-all/string-match-all.component';
import { NullishCoalescingComponent } from './nullish-coalescing/nullish-coalescing.component';
import { OptionalChainingComponent } from './optional-chaining/optional-chaining.component';
import { LogincalAndAssignmentOptrComponent } from './logincal-and-assignment-optr/logincal-and-assignment-optr.component';
import { LogincalOrAssignmentOptrComponent } from './logincal-or-assignment-optr/logincal-or-assignment-optr.component';


@NgModule({
  declarations: [
    Es11Component,
    MainEs11Component,
    BigintComponent,
    StringMatchAllComponent,
    NullishCoalescingComponent,
    OptionalChainingComponent,
    LogincalAndAssignmentOptrComponent,
    LogincalOrAssignmentOptrComponent,
  ],
  imports: [
    CommonModule,
    Es11RoutingModule
  ]
})
export class ES11Module { }
