import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { LoginService } from "../../seguranca/login/login.service";
import { environment } from "../../../environments/environment";
import { objectToQueryString } from "../../comum/ferramenta/ferramenta-comum";

import { Usuario } from "../../modelo/entidade/usuario";
import { UsuarioFiltroDTO } from "src/app/modelo/dto/usuario.filtro.dto";

@Injectable({
  providedIn: "root",
})
export class RestService {

  private funcionalidade = "usuario";

  filtro = new UsuarioFiltroDTO();

  constructor(private _http: HttpClient, private loginService: LoginService) {}

  public create(entidade: Usuario): Observable<number> {
    entidade["id"] = null;
    return this._http.post<number>(
      `${environment.REST_API_URL}/${this.funcionalidade}`,
      entidade,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public restore(id: number): Observable<Usuario> {
    return this._http.get<Usuario>(
      `${environment.REST_API_URL}/${this.funcionalidade}/${id}`,
      { headers: this.loginService.apiRequestHttpHeader }
    );
  }

  public update(id: number, entidade: Usuario): Observable<void> {
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

  public prepararForm(modelo: Usuario): Observable<Usuario> {
    return new Observable<Usuario>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<E>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-form`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public prepararFiltro(modelo: UsuarioFiltroDTO): Observable<UsuarioFiltroDTO> {
    return new Observable<UsuarioFiltroDTO>((resolve) => {
      resolve.next(modelo);
      resolve.complete();
    });
    // return this._http.post<F>(
    //     `${environment.REST_API_URL}/${this.funcionalidade}/preparar-filtro`,
    //     modelo,
    //     { headers: this.loginService.apiRequestHttpHeader }
    // );
  }

  public filtrar(): Observable<Usuario[]> {
    // captar parametros do filtro
    let param = "";
    if (this.filtro) {
      param = objectToQueryString(this.filtro);
      if (param) {
        param = "?" + param;
      }
    }
    if (this.funcionalidade) {
      return this._http.get<Usuario[]>(
        `${environment.REST_API_URL}/${this.funcionalidade}${param}`,
        { headers: this.loginService.apiRequestHttpHeader }
      );
    }
  }

}
