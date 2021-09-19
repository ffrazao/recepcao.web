import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';

@NgModule({
  declarations: [
    PessoaComponent,
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
  ],
  exports: [
    PessoaComponent,
  ],
  providers: [
  ]
})
export class PessoaModule { }
