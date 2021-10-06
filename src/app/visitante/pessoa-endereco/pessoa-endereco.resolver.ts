import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VisitaFiltroDTO } from '../../modelo/dto/visita.filtro.dto';
import { RestService } from '../service/rest.service';
import { PessoaEndereco } from 'src/app/modelo/entidade/pessoa-endereco';

@Injectable({
  providedIn: 'root'
})
export class PessoaEnderecoResolver implements Resolve<PessoaEndereco[]> {

  constructor(
    // private _servico: RestService,
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PessoaEndereco[]> {
    // this._servico.filtro = this._servico.filtro ? this._servico.filtro : new VisitaFiltroDTO();
    // return this._servico.filtrar();
    return null;
  }

}
