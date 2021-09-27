import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { LoginService } from "../../seguranca/login/login.service";
import { environment } from "../../../environments/environment";
import { objectToQueryString } from "../../comum/ferramenta/ferramenta-comum";
import { EntidadeRepresentante } from "../../modelo/entidade/entidade-representante";
import { EntidadeRepresentanteFiltroDTO } from "../../modelo/dto/entidade-representante.filtro.dto";

@Injectable({
  providedIn: "root",
})
export class RestService {

  private funcionalidade = "entidade-representante";

  filtro = new EntidadeRepresentanteFiltroDTO();

  constructor(private _http: HttpClient, private loginService: LoginService) {}

  public create(entidade: EntidadeRepresentante): Observable<number> {
    entidade["id"] = null;
    return this._http.post<number>(
      `${environment.REST_API_URL}/${this.funcionalidade}`,
      entidade,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public restore(id: number): Observable<EntidadeRepresentante> {
    return this._http.get<EntidadeRepresentante>(
      `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public update(id: number, entidade: EntidadeRepresentante): Observable<void> {
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

  public prepararForm(modelo: EntidadeRepresentante): Observable<EntidadeRepresentante> {
    return new Observable<EntidadeRepresentante>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<E>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-form`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public prepararFiltro(modelo: EntidadeRepresentanteFiltroDTO): Observable<EntidadeRepresentanteFiltroDTO> {
    return new Observable<EntidadeRepresentanteFiltroDTO>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<F>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-filtro`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public filtrar(): Observable<EntidadeRepresentante[]> {
    // captar parametros do filtro
    let param = "";
    if (this.filtro) {
      param = objectToQueryString(this.filtro);
      if (param) {
        param = "?" + param;
      }
    }
    if (this.funcionalidade) {
      return this._http.get<EntidadeRepresentante[]>(
        `${environment.REST_API_URL}/${this.funcionalidade}${param}`,
        { headers: this.loginService.apiRequestHttpHeader }
      );
    }
  }

}
