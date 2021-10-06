import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';

@NgModule({
  declarations: [
    FuncionarioComponent,
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
  ],
  exports: [
    FuncionarioComponent,
  ],
  providers: [
  ]
})
export class FuncionarioModule { }
