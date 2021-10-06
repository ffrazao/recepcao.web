import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { VisitaVisitante } from "../../modelo/entidade/visita-visitante";
import { Visitante } from "../../modelo/entidade/visitante";
import { Visita } from "../../modelo/entidade/visita";
import { FormService as PessoaFormService } from "../../pessoa/service/form.service";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(
    private _fb: FormBuilder,
    private _pessoaFormService: PessoaFormService
    ) {

    }

  criar(entidade: Visita): FormGroup {
    entidade = entidade || new Visita();
    let result = this._fb.group({
      id: [entidade.id, []],
      entradaLocal: [entidade.entradaLocal, []],
      entrada: [entidade.entrada, []],
      destinoLocal: [entidade.destinoLocal, []],
      motivo: [entidade.motivo, []],
      autorizador: [entidade.autorizador, []],
      incluidoPor: [entidade.incluidoPor, []],
      visitaVisitanteList: this.criarVisitaVisitanteList(entidade.visitaVisitanteList),
    });
    return result;
  }

  criarVisitaVisitanteList(lista: VisitaVisitante[]) {
    lista = lista || new Array<VisitaVisitante>();
    const listaCtrl = [];
    for (const ent of lista) {
      listaCtrl.push(this.criarVisitaVisitante(ent));
    }
    const result = this._fb.array(listaCtrl, [Validators.required]);
    return result;
  }

  criarVisitaVisitante(entidade: VisitaVisitante): FormGroup {
    entidade = entidade || new VisitaVisitante();
    let result = this._fb.group({
      id: [entidade.id, []],
      visitante: this.criarVisitante(entidade.visitante),
      telefone: [entidade.telefone, []],
      email: [entidade.email, []],
      entidadeRepresentante: [entidade.entidadeRepresentante, []],
      saida: [entidade.saida, []],
      saidaUsuario: [entidade.saidaUsuario, []],
    });
    return result;
  }

  criarVisitante(entidade: Visitante): FormGroup {
    entidade = entidade || new Visitante();
    let result = this._fb.group({
      id: [entidade.id, []],
      telefone: [entidade.telefone, []],
      email: [entidade.email, []],
      entidadeRepresentante: [entidade.entidadeRepresentante, []],
      foto: [entidade.foto, []],
      pessoa: this._pessoaFormService.criar(entidade.pessoa),
    });
    return result;
  }

}
