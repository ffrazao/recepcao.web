import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltroRoutingModule } from './filtro-routing.module';
import { FiltroComponent } from './filtro.component';
import { FiltroResolver } from './filtro.resolver';

@NgModule({
  declarations: [
    FiltroComponent,
  ],
  imports: [
    CommonModule,
    FiltroRoutingModule,
  ],
  exports: [
    FiltroComponent,
  ],
  providers: [
    FiltroResolver,
  ]
})
export class FiltroModule { }
