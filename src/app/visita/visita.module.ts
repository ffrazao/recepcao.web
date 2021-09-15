import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaRoutingModule } from './visita-routing.module';
import { VisitaComponent } from './visita.component';

@NgModule({
  declarations: [
    VisitaComponent,
  ],
  imports: [
    CommonModule,
    VisitaRoutingModule,
  ],
  exports: [
    VisitaComponent,
  ],
  providers: [
  ]
})
export class VisitaModule { }
