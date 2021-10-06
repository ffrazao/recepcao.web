import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaEnderecoComponent } from './pessoa-endereco.component';
import { PessoaEnderecoResolver } from './pessoa-endereco.resolver';

const routes: Routes = [
//   {
//   path: '',
//   component: PessoaEnderecoComponent,
//   resolve: [PessoaEnderecoResolver],
// }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaEnderecoRoutingModule { }
