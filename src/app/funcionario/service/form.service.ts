import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Funcionario } from "../../modelo/entidade/funcionario";
import { Lotacao } from "../../modelo/entidade/lotacao";

@Injectable({
  providedIn: "root",
})
export class FormService {

  constructor(private _fb: FormBuilder) { }

  criar(entidade: Funcionario): FormGroup {
    entidade = entidade ? entidade : new Funcionario();
    let result = this._fb.group({
      id: [entidade.id, []],
      matricula: [entidade.matricula, []],
      ramal: [entidade.ramal, []],
      pessoa: [entidade.pessoa, []],
      lotacaoList: this.criarLotacaoList(entidade.lotacaoList),
    });
    return result;
  }

  criarLotacaoList(lista: Lotacao[]) {
    lista = lista ? lista : new Array<Lotacao>();
    const listaCtrl = [];
    for (const ent of lista) {
      listaCtrl.push(this.criarLotacao(ent));
    }
    const result = this._fb.array(listaCtrl, [Validators.required]);
    return result;
  }

  criarLotacao(entidade: Lotacao) {
    entidade = entidade ? entidade : new Lotacao();
    let result = this._fb.group({
      id: [entidade.id, []],
      unidadeOrganizacional: [entidade.unidadeOrganizacional, []],
      ramal: [entidade.ramal, []],
    });
    return result;
  }

}
