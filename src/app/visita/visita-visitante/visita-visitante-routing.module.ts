import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VisitaVisitanteComponent } from './visita-visitante.component';
import { VisitaVisitanteResolver } from './visita-visitante.resolver';

const routes: Routes = [
//   {
//   path: '',
//   component: VisitaVisitanteComponent,
//   resolve: [VisitaVisitanteResolver],
// }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitaVisitanteRoutingModule { }
