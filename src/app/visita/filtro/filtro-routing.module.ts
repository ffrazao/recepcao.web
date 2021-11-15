import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FiltroComponent } from "./filtro.component";
import { FiltroResolver } from "./filtro.resolver";
import { ListResolver as LocalListResolver } from "../../local/list/list.resolver";
import { ListResolver as UsuarioListResolver } from "../../usuario/list/list.resolver";
import { ListResolver as FuncionarioListResolver } from "../../funcionario/list/list.resolver";

const routes: Routes = [
  {
    path: "",
    component: FiltroComponent,
    resolve: [FiltroResolver, LocalListResolver, UsuarioListResolver, FuncionarioListResolver],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltroRoutingModule {}
