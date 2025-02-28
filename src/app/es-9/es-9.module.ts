import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Es9RoutingModule } from './es-9-routing.module';
import { ObjectRestPropsComponent } from './object-rest-props/object-rest-props.component';



@NgModule({
  declarations: [
    ObjectRestPropsComponent
  ],
  imports: [
    CommonModule,
    Es9RoutingModule
  ]
})
export class ES9Module { }
