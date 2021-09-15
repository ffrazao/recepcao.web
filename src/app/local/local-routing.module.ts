import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LocalComponent } from "./local.component";

const routes: Routes = [
  {
    path: "",
    component: LocalComponent,
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
export class LocalRoutingModule {}
