import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingTaskComponent } from './coding-task.component';
import { MainCodingTaskComponent } from './main-coding-task/main-coding-task.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { DirectiveComponent } from './directive/directive.component';
import { NewNgForComponent } from './new-ng-for/new-ng-for.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { SearchSwitchMapComponent } from './search-switch-map/search-switch-map.component';
import { ParentChildCommComponent } from './parent-child-comm/parent-child-comm.component';


const routes: Routes = [
  {
    path: '',
    component: CodingTaskComponent,
    children: [
      { path: '', component: MainCodingTaskComponent, },
      { path: 'form-component', component: FormComponentComponent, },
      { path: 'directive', component: DirectiveComponent, },
      { path: 'custom-pipe', component: CustomPipeComponent, },
      { path: 'new-ng-for', component: NewNgForComponent, },
      { path: 'content-projection', component: ContentProjectionComponent, },
      { path: 'search-switch-map', component: SearchSwitchMapComponent, },
      { path: 'parent-to-child-comm', component: ParentChildCommComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingTaskRoutingModule { }
