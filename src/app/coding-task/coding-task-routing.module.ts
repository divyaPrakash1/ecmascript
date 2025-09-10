import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodingTaskComponent } from './coding-task.component';
import { MainCodingTaskComponent } from './main-coding-task/main-coding-task.component';
import { FormComponentComponent } from './form-component/form-component.component';


const routes: Routes = [
  {
    path: '',
    component: CodingTaskComponent,
    children: [
      { path: '', component: MainCodingTaskComponent, },
      { path: 'form-component', component: FormComponentComponent, },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodingTaskRoutingModule { }
