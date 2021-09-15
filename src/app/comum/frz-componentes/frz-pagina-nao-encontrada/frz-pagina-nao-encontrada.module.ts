import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrzPaginaNaoEncontradaComponent } from './frz-pagina-nao-encontrada.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FrzPaginaNaoEncontradaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FrzPaginaNaoEncontradaComponent,
  ],
  entryComponents: [
    FrzPaginaNaoEncontradaComponent,
  ],
})
export class FrzPaginaNaoEncontradaModule { }
