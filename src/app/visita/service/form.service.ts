import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Funcionario } from "src/app/modelo/entidade/funcionario";
import { Local } from "src/app/modelo/entidade/local";
import { Usuario } from "src/app/modelo/entidade/usuario";

import { Visita } from "src/app/modelo/entidade/visita";
import { VisitaVisitante } from "src/app/modelo/entidade/visita-visitante";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private _fb: FormBuilder) {}

  criar(entidade: Visita): FormGroup {
    entidade = entidade ? entidade : new Visita();
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
    lista = lista ? lista : new Array<VisitaVisitante>();
    const listaCtrl = [];
    for (const ent of lista) {
      listaCtrl.push(this.criarVisitaVisitante(ent));
    }
    const result = this._fb.array(listaCtrl, [Validators.required]);
    return result;
  }

  criarVisitaVisitante(entidade: VisitaVisitante): FormGroup {
    entidade = entidade ? entidade : new VisitaVisitante();
    let result = this._fb.group({
      id: [entidade.id, []],
      visitante: [entidade.visitante, []],
      telefone: [entidade.telefone, []],
      email: [entidade.email, []],
      entidadeRepresentante: [entidade.entidadeRepresentante, []],
      saida: [entidade.saida, []],
      saidaUsuario: [entidade.saidaUsuario, []],
    });
    return result;
  }
}
