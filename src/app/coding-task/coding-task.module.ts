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
import { Child1Component } from './content-projection/child1/child1.component';
import { Child2Component } from './content-projection/child2/child2.component';
import { Child3Component } from './content-projection/child3/child3.component';
import { Child4Component } from './content-projection/child4/child4.component';
import { UpperPipe } from './utils/pipes/upper.pipe';
import { FilterPipe } from './utils/pipes/filter.pipe';
import { ClasssDirective } from './utils/directives/classs.directive';
import { CutomClassDirective } from './utils/directives/cutom-class.directive';
import { CapitalizeDirective } from './utils/directives/capitalize.directive';
import { AnyPipe } from './utils/pipes/any.pipe';
import { HoversDirective } from './utils/directives/hovers.directive';
import { DirectiveComponent } from './directive/directive.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { HoverClassDirective } from './utils/directives/hover-class.directive';
import { CapitalDirective } from './utils/directives/capital.directive';
import { SmallDirective } from './utils/directives/small.directive';
import { FirstCapitalPipe } from './utils/pipes/first-capital.pipe';
import { FirstAndLastCapitalPipe } from './utils/pipes/first-and-last-capital.pipe';
import { CapitalsPipe } from './utils/pipes/capitals.pipe';
import { ConcatwithUnderscorePipe } from './utils/pipes/concatwith-underscore.pipe';
import { NewNgForComponent } from './new-ng-for/new-ng-for.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { SearchSwitchMapComponent } from './search-switch-map/search-switch-map.component';
import { ParentChildCommComponent } from './parent-child-comm/parent-child-comm.component';
import { ChildComponent } from './parent-child-comm/child/child.component';


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
    CapitalizeDirective,
    AnyPipe,
    HoversDirective,
    DirectiveComponent,
    CustomPipeComponent,
    HoverClassDirective,
    CapitalDirective,
    SmallDirective,
    FirstCapitalPipe,
    FirstAndLastCapitalPipe,
    CapitalsPipe,
    ConcatwithUnderscorePipe,
    NewNgForComponent,
    ContentProjectionComponent,
    SearchSwitchMapComponent,
    ParentChildCommComponent,
    ChildComponent],
  imports: [
    CommonModule,
    CodingTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CodingTaskModule { }
