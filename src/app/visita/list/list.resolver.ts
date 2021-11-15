import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VisitaFiltroDTO } from '../../modelo/dto/visita.filtro.dto';
import { Visita } from '../../modelo/entidade/visita';
import { RestService } from '../service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Visita[]> {

  constructor(
    private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Visita[]> {
    console.log('filtro', this._servico.filtro);
    this._servico.filtro = this._servico.filtro ? this._servico.filtro : new VisitaFiltroDTO();
    return this._servico.filtrar();
  }

}
