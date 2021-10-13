import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { LoginService } from "../../seguranca/login/login.service";
import { environment } from "../../../environments/environment";
import { objectToQueryString } from "../../comum/ferramenta/ferramenta-comum";
import { Visitante } from "../../modelo/entidade/visitante";
import { VisitanteFiltroDTO } from "../../modelo/dto/visitante.filtro.dto";

@Injectable({
  providedIn: "root",
})
export class RestService {

  private funcionalidade = "visitante";

  filtro = new VisitanteFiltroDTO();

  constructor(private _http: HttpClient, private loginService: LoginService) {}

  public create(entidade: Visitante): Observable<number> {
    entidade["id"] = null;
    return this._http.post<number>(
      `${environment.REST_API_URL}/${this.funcionalidade}`,
      entidade,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public restore(id: number): Observable<Visitante> {
    return this._http.get<Visitante>(
      `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public update(id: number, entidade: Visitante): Observable<void> {
    return this._http.put<void>(
      `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
      entidade,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public delete(id: number): Observable<void> {
    return this._http.delete<void>(
      `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public prepararForm(modelo: Visitante): Observable<Visitante> {
    return new Observable<Visitante>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<E>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-form`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public prepararFiltro(modelo: VisitanteFiltroDTO): Observable<VisitanteFiltroDTO> {
    return new Observable<VisitanteFiltroDTO>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<F>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-filtro`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public filtrar(): Observable<Visitante[]> {
    // captar parametros do filtro
    let param = "";
    if (this.filtro) {
      param = objectToQueryString(this.filtro);
      if (param) {
        param = "?" + param;
      }
    }
    if (this.funcionalidade) {
      return this._http.get<Visitante[]>(
        `${environment.REST_API_URL}/${this.funcionalidade}${param}`,
        { headers: this.loginService.apiRequestHttpHeader }
      );
    }
  }

  public registrarSaida(id: number) {
    return this._http.put<string>(
      `${environment.REST_API_URL}/${this.funcionalidade}/registrar-saida/${id}`, null,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

}
