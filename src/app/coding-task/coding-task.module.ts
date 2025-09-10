import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodingTaskRoutingModule } from './coding-task-routing.module';
import { CodingTaskComponent } from './coding-task.component';
import { MainCodingTaskComponent } from './main-coding-task/main-coding-task.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HoverDirective } from './utils/directives/hover.directive';
import { UpperCaseDirective } from './utils/directives/upper.directive';
import { AddClassDirective } from './utils/directives/add-class.directive';
import { EllipsePipe } from './utils/pipes/ellipse.pipe';
import { CapitalizePipe } from './utils/pipes/capitalize.pipe';
import { ConcatwithPipe } from './utils/pipes/concatwith.pipe';
import { LowerDirective } from './utils/directives/lower.directive';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { UpperPipe } from './utils/pipes/upper.pipe';
import { FilterPipe } from './utils/pipes/filter.pipe';
import { ClasssDirective } from './utils/directives/classs.directive';
import { CutomClassDirective } from './utils/directives/cutom-class.directive';
import { CapitalizeDirective } from './utils/directives/capitalize.directive';


@NgModule({
  declarations: [
    CodingTaskComponent,
    MainCodingTaskComponent,
    FormComponentComponent,
    HoverDirective,
    UpperCaseDirective,
    AddClassDirective,
    EllipsePipe,
    CapitalizePipe,
    ConcatwithPipe,
    LowerDirective,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    UpperPipe,
    FilterPipe,
    ClasssDirective,
    CutomClassDirective,
    CapitalizeDirective],
  imports: [
    CommonModule,
    CodingTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CodingTaskModule { }
