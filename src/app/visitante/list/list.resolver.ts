import { Injectable } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable, of } from "rxjs";

import { VisitanteFiltroDTO } from "src/app/modelo/dto/visitante.filtro.dto";
import { Visitante } from "src/app/modelo/entidade/visitante";
import { RestService } from "../service/rest.service";

@Injectable({
  providedIn: "root",
})
export class ListResolver implements Resolve<Visitante[]> {

  constructor(private _servico: RestService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Visitante[]> {
    this._servico.filtro = this._servico.filtro
      ? this._servico.filtro
      : new VisitanteFiltroDTO();
    return this._servico.filtrar();
  }

}
