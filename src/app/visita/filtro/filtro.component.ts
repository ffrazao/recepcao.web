import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { idListComparar } from "../../comum/ferramenta/ferramenta-comum";
import { Local } from "../../modelo/entidade/local";
import { Usuario } from "../../modelo/entidade/usuario";
import { FormService } from "../service/form.service";
import { Funcionario } from "../../modelo/entidade/funcionario";
import { MensagemService } from "../../comum/servico/mensagem/mensagem.service";
import { RestService } from "../service/rest.service";
import { VisitaFiltroDTO } from "src/app/modelo/dto/visita.filtro.dto";

@Component({
  selector: "app-filtro",
  templateUrl: "./filtro.component.html",
  styleUrls: ["./filtro.component.scss"],
})
export class FiltroComponent implements OnInit {
  filtro: FormGroup;

  localList: Local[];
  usuarioList: Usuario[];
  funcionarioList: Funcionario[];

  constructor(
    private _form: FormService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _rest: RestService,
    private _mensagem: MensagemService
  ) {}

  ngOnInit(): void {
    this.filtro = this._form.criarFiltro(this._activatedRoute.snapshot.data[0]);
    this.localList = this._activatedRoute.snapshot.data[1];
    this.usuarioList = this._activatedRoute.snapshot.data[2];
    this.funcionarioList = this._activatedRoute.snapshot.data[3];
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  filtraLocal(item: Local, param: string[]) {
    return item.portaria === param[0];
  }

  filtrar() {
    let filtro: VisitaFiltroDTO = this.filtro.value as VisitaFiltroDTO;
    this._rest.filtro = this._rest.filtro || new VisitaFiltroDTO();
    this._rest.filtro.pagina = 1;
    this._rest.filtro.autorizadorList = filtro.autorizadorList
      ? filtro.autorizadorList.map((v) => v.id)
      : null;
    this._rest.filtro.cpf = filtro.cpf;
    this._rest.filtro.destinoLocalList = filtro.destinoLocalList
      ? filtro.destinoLocalList.map((v) => v.id)
      : null;
    this._rest.filtro.entradaFim = filtro.entradaFim;
    this._rest.filtro.entradaInicio = filtro.entradaInicio;
    this._rest.filtro.entradaLocalList = filtro.entradaLocalList
      ? filtro.entradaLocalList.map((v) => v.id)
      : null;
    this._rest.filtro.incluidoPorList = filtro.incluidoPorList
      ? filtro.incluidoPorList.map((v) => v.id)
      : null;
    this._rest.filtro.nome = filtro.nome;

    this._router.navigate(["../visita"], {
      queryParams: this._rest.filtro,
      queryParamsHandling: "merge",
    });
  }
}
