import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltroRoutingModule } from './filtro-routing.module';
import { FiltroComponent } from './filtro.component';
import { FiltroResolver } from './filtro.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '../../comum/pipe/pipe.module';

@NgModule({
  declarations: [
    FiltroComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FiltroRoutingModule,
    PipeModule,
  ],
  exports: [
    FiltroComponent,
  ],
  providers: [
    FiltroResolver,
  ]
})
export class FiltroModule { }
