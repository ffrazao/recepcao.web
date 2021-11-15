import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { VisitaFiltroDTO } from 'src/app/modelo/dto/visita.filtro.dto';

@Injectable({
  providedIn: 'root'
})
export class FiltroResolver implements Resolve<VisitaFiltroDTO> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<VisitaFiltroDTO> {
    // console.log(route, state);
    let result = new VisitaFiltroDTO();
    let hoje = new Date();
    result.entradaFim = hoje.toISOString().substr(0, 16);
    hoje.setTime(hoje.setMonth(hoje.getMonth() - 1));
    result.entradaInicio = hoje.toISOString().substr(0, 16);
    return of(result);
  }
}
