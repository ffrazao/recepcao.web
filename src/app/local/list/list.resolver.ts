import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalFiltroDTO } from '../../modelo/dto/local.filtro.dto';
import { Local } from '../../modelo/entidade/local';
import { RestService } from '../service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Local[]> {

  constructor(
    private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Local[]> {
    this._servico.filtro = this._servico.filtro ? this._servico.filtro : new LocalFiltroDTO();
    return this._servico.filtrar();
  }

}
