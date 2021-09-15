import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsuarioComponent } from "./usuario.component";

const routes: Routes = [
  {
    path: "",
    component: UsuarioComponent,
    children: [
      {
        path: "",
        loadChildren: () => import("./list/list.module").then((m) => m.ListModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioRoutingModule {}
