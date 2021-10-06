import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { FormResolver } from './form.resolver';
import { PipeModule } from '../../comum/pipe/pipe.module';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutingModule,
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
