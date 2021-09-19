import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PessoaEnderecoRoutingModule } from './pessoa-endereco-routing.module';
import { PessoaEnderecoComponent } from './pessoa-endereco.component';
import { PessoaEnderecoResolver } from './pessoa-endereco.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PessoaEnderecoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PessoaEnderecoRoutingModule,
  ],
  exports: [
    PessoaEnderecoComponent,
  ],
  providers: [
    PessoaEnderecoResolver,
  ]
})
export class PessoaEnderecoModule { }
