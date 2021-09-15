import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list.component';
import { ListResolver } from './list.resolver';

const routes: Routes = [{
  path: '',
  component: ListComponent,
  resolve: [ListResolver],
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
