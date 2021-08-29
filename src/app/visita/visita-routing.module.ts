import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisitaComponent } from './visita.component';
import { ListComponent } from './list/list.component';
import { FiltroComponent } from './filtro/filtro.component';
import { FormComponent } from './form/form.component';
import { ListResolver } from './list.resolver';
import { FiltroResolver } from './filtro.resolver';
import { FormResolver } from './form.resolver';

const routes: Routes = [{
  path: '',
  component: VisitaComponent,
  children: [
    {path: '', component: ListComponent, resolve: [ListResolver]},
    {path: 'filtro', component: FiltroComponent, resolve: [FiltroResolver]},
    {path: ':id/editar', component: FormComponent, resolve: [FormResolver], pathMatch: 'full'},
    {path: ':id', component: FormComponent, resolve: [FormResolver], pathMatch: 'full'},
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaRoutingModule { }
