import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsuarioFiltroDTO } from '../../modelo/dto/usuario.filtro.dto';
import { Usuario } from '../../modelo/entidade/usuario';
import { RestService } from '../service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Usuario[]> {

  constructor(
    private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Usuario[]> {
    this._servico.filtro = this._servico.filtro ? this._servico.filtro : new UsuarioFiltroDTO();
    return this._servico.filtrar();
  }

}
