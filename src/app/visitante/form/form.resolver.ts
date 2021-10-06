import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { Observable, of } from "rxjs";

import { Pessoa } from "src/app/modelo/entidade/pessoa";
import { RestService } from "../service/rest.service";

@Injectable({
  providedIn: "root",
})
export class FormResolver implements Resolve<Pessoa> {
  constructor(
    private _servico: RestService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Pessoa> {
    let id = route.params.id;
    if (id.toLowerCase() === "novo") {
      return this._servico.prepararForm(new Pessoa());
    } else {
      return this._servico.restore(id);
    }
  }

}
