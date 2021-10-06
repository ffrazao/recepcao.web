import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { FuncionarioFiltroDTO } from '../../modelo/dto/funcionario.filtro.dto';
import { Funcionario } from '../../modelo/entidade/funcionario';
import { RestService } from '../service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Funcionario[]> {

  constructor(
    private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Funcionario[]> {
    this._servico.filtro = this._servico.filtro ? this._servico.filtro : new FuncionarioFiltroDTO();
    return this._servico.filtrar();
  }

}
