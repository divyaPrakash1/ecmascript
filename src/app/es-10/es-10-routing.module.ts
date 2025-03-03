import { NgModule } from '@angular/core';
import { MainEs10Component } from './main-es-10/main-es-10.component';
import { RouterModule, Routes } from '@angular/router';
import { Es10Component } from './es-10.component';
import { StringTrimStartComponent } from './string-trim-start/string-trim-start.component';
import { StringTrimEndComponent } from './string-trim-end/string-trim-end.component';
import { ObjectFromEntriesComponent } from './object-from-entries/object-from-entries.component';
import { OptionalCatchBindingComponent } from './optional-catch-binding/optional-catch-binding.component';
import { FlatComponent } from './flat/flat.component';

const routes: Routes = [
  {
    path: '',
    component: Es10Component,
    children: [
      { path: '', component: MainEs10Component },
      { path: 'trim-start', component: StringTrimStartComponent },
      { path: 'trim-end', component: StringTrimEndComponent },
      { path: 'object-from-entries', component: ObjectFromEntriesComponent },
      { path: 'optional-catch-binding', component: OptionalCatchBindingComponent },
      { path: 'flat', component: FlatComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ES10RoutingModule {

}