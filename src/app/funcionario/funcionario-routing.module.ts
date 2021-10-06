import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FuncionarioComponent } from "./funcionario.component";

const routes: Routes = [
  {
    path: "",
    component: FuncionarioComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./list/list.module").then((m) => m.ListModule),
      },
      {
        path: "filtro",
        loadChildren: () =>
          import("./filtro/filtro.module").then((m) => m.FiltroModule),
      },
      {
        path: ":id/editar",
        loadChildren: () =>
          import("./form/form.module").then((m) => m.FormModule),
        pathMatch: "full",
      },
      {
        path: ":id",
        loadChildren: () =>
          import("./form/form.module").then((m) => m.FormModule),
        pathMatch: "full",
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionarioRoutingModule {}
