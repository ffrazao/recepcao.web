import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FiltroComponent } from "./filtro.component";
import { FiltroResolver } from "./filtro.resolver";

const routes: Routes = [
  {
    path: "",
    component: FiltroComponent,
    resolve: [FiltroResolver],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltroRoutingModule {}
