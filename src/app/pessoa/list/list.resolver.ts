import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PessoaFiltroDTO } from '../../modelo/dto/pessoa.filtro.dto';
import { Pessoa } from '../../modelo/entidade/pessoa';
import { RestService } from '../service/rest.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolver implements Resolve<Pessoa[]> {

  constructor(
    private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pessoa[]> {
    this._servico.filtro = this._servico.filtro ? this._servico.filtro : new PessoaFiltroDTO();
    return this._servico.filtrar();
  }

}
