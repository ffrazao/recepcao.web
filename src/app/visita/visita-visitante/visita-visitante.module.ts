import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaVisitanteRoutingModule } from './visita-visitante-routing.module';
import { VisitaVisitanteComponent } from './visita-visitante.component';
import { VisitaVisitanteResolver } from './visita-visitante.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VisitaVisitanteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VisitaVisitanteRoutingModule,
  ],
  exports: [
    VisitaVisitanteComponent,
  ],
  providers: [
    VisitaVisitanteResolver,
  ]
})
export class VisitaVisitanteModule { }
