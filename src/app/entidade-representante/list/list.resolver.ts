import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EntidadeRepresentanteFiltroDTO } from '../../modelo/dto/entidade-representante.filtro.dto';
import { EntidadeRepresentante } from '../../modelo/entidade/entidade-representante';
import { RestService } from '../service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<EntidadeRepresentante[]> {

  constructor(
    private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EntidadeRepresentante[]> {
    this._servico.filtro = this._servico.filtro ? this._servico.filtro : new EntidadeRepresentanteFiltroDTO();
    return this._servico.filtrar();
  }

}
