import { Injectable } from "@angular/core";
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute,
} from "@angular/router";
import { Observable, of } from "rxjs";

import { Visita } from "src/app/modelo/entidade/visita";
import { RestService } from "../service/rest.service";

@Injectable({
  providedIn: "root",
})
export class FormResolver implements Resolve<Visita> {

  constructor(
    private _servico: RestService,
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Visita> {
    let id = route.params.id;
    if (id.toLowerCase() === "novo") {
      return this._servico.prepararForm(null);
    } else {
      return this._servico.restore(id);
    }
  }

}
