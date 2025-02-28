import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Es9RoutingModule } from './es-9-routing.module';
import { ObjectRestPropsComponent } from './object-rest-props/object-rest-props.component';
import { NewRegExFeatureComponent } from './new-reg-ex-feature/new-reg-ex-feature.component';



@NgModule({
  declarations: [
    ObjectRestPropsComponent,
    NewRegExFeatureComponent,
  ],
  imports: [
    CommonModule,
    Es9RoutingModule
  ]
})
export class ES9Module { }
