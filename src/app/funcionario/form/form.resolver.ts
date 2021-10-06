import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { Observable, of } from "rxjs";

import { Funcionario } from "../../modelo/entidade/funcionario";
import { RestService } from "../service/rest.service";

@Injectable({
  providedIn: "root",
})
export class FormResolver implements Resolve<Funcionario> {
  constructor(
    private _servico: RestService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Funcionario> {
    let id = route.params.id;
    if (id.toLowerCase() === "novo") {
      return this._servico.prepararForm(new Funcionario());
    } else {
      return this._servico.restore(id);
    }
  }

}
