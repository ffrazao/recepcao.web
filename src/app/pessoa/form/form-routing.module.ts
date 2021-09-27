import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListResolver as LocalListResolver } from "../../local/list/list.resolver";
import { ListResolver as UsuarioListResolver } from "../../usuario/list/list.resolver";
import { ListResolver as EntidadeRepresentanteResolver } from "../../entidade-representante/list/list.resolver";

import { FormComponent } from "./form.component";
import { FormResolver } from "./form.resolver";

const routes: Routes = [
  {
    path: "",
    component: FormComponent,
    resolve: [FormResolver, LocalListResolver, UsuarioListResolver, EntidadeRepresentanteResolver],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
