import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { VisitaComponent } from './visita.component';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FiltroComponent } from './filtro/filtro.component';
import { ListResolver } from '../_crud/list/list.resolver';
import { FiltroResolver } from '../_crud/filtro/filtro.resolver';
import { FormResolver } from './form.resolver';

@NgModule({
  declarations: [
    VisitaComponent,
    ListComponent,
    FormComponent,
    FiltroComponent,
  ],
  imports: [
    CommonModule,
    VisitaRoutingModule,
  ],
  exports: [
    VisitaComponent,
  ],
  providers: [
    ListResolver,
    FiltroResolver,
    FormResolver,
  ]
})
export class VisitaModule { }
