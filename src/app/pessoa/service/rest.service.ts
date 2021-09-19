import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { LoginService } from "../../seguranca/login/login.service";
import { environment } from "../../../environments/environment";
import { objectToQueryString } from "../../comum/ferramenta/ferramenta-comum";
import { Pessoa } from "../../modelo/entidade/pessoa";
import { PessoaFiltroDTO } from "../../modelo/dto/pessoa.filtro.dto";

@Injectable({
  providedIn: "root",
})
export class RestService {

  private funcionalidade = "pessoa";

  filtro = new PessoaFiltroDTO();

  constructor(private _http: HttpClient, private loginService: LoginService) {}

  public create(entidade: Pessoa): Observable<number> {
    entidade["id"] = null;
    return this._http.post<number>(
      `${environment.REST_API_URL}/${this.funcionalidade}`,
      entidade,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public restore(id: number): Observable<Pessoa> {
    return this._http.get<Pessoa>(
      `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public update(id: number, entidade: Pessoa): Observable<void> {
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

  public prepararForm(modelo: Pessoa): Observable<Pessoa> {
    return new Observable<Pessoa>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<E>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-form`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public prepararFiltro(modelo: PessoaFiltroDTO): Observable<PessoaFiltroDTO> {
    return new Observable<PessoaFiltroDTO>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<F>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-filtro`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public filtrar(): Observable<Pessoa[]> {
    // captar parametros do filtro
    let param = "";
    if (this.filtro) {
      param = objectToQueryString(this.filtro);
      if (param) {
        param = "?" + param;
      }
    }
    if (this.funcionalidade) {
      return this._http.get<Pessoa[]>(
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
