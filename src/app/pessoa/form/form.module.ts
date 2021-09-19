import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormResolver } from './form.resolver';
import { PessoaEnderecoModule } from '../pessoa-endereco/pessoa-endereco.module'
import { PipeModule } from 'src/app/comum/pipe/pipe.module';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
    PessoaEnderecoModule,
    PipeModule,
  ],
  exports: [
    FormComponent,
  ],
  providers: [
    FormResolver,
  ]
})
export class FormModule { }
