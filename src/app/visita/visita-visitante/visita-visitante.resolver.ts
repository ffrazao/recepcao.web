import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VisitaFiltroDTO } from '../../modelo/dto/visita.filtro.dto';
import { RestService } from '../service/rest.service';
import { VisitaVisitante } from 'src/app/modelo/entidade/visita-visitante';

@Injectable({
  providedIn: 'root'
})
export class VisitaVisitanteResolver implements Resolve<VisitaVisitante[]> {

  constructor(
    // private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VisitaVisitante[]> {
    // this._servico.filtro = this._servico.filtro ? this._servico.filtro : new VisitaFiltroDTO();
    // return this._servico.filtrar();
    return null;
  }

}
