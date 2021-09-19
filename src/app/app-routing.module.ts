import { LayoutComMenuComponent } from './layout/com-menu/layout-com-menu.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrzPaginaNaoEncontradaComponent } from './comum/frz-componentes/frz-pagina-nao-encontrada/frz-pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComMenuComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./casa/casa.module').then(m => m.CasaModule)
      },
      // {
      //   path: 'teste',
      //   loadChildren: () => import('./_crud/crud.module').then(m => m.CrudModule),
      // },
      // {
      //   path: 'modelo',
      //   loadChildren: () => import('./_c/c-crud.module').then(m => m.CCrudModule),
      // },
      {
        path: 'pessoa',
        loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule),
      },
      {
        path: 'visita',
        loadChildren: () => import('./visita/visita.module').then(m => m.VisitaModule),
      },
    ]
  },
  {
    path: '**',
    component: FrzPaginaNaoEncontradaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
