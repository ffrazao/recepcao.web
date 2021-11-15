import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { VisitaVisitante } from "../../modelo/entidade/visita-visitante";
import { Visita } from "../../modelo/entidade/visita";
import { FormService as PessoaFormService } from "../../pessoa/service/form.service";
import { VisitaFiltroDTO } from "src/app/modelo/dto/visita.filtro.dto";

@Injectable({
  providedIn: "root",
})
export class FormService {

  constructor(
    private _fb: FormBuilder,
    private _pessoaFormService: PessoaFormService
  ) {}

  criar(entidade: Visita): FormGroup {
    entidade = entidade || new Visita();
    let result = this._fb.group({
      id: [entidade.id, []],
      entradaLocal: [entidade.entradaLocal, [Validators.required]],
      entrada: [entidade.entrada, [Validators.required]],
      destinoLocal: [entidade.destinoLocal, [Validators.required]],
      motivo: [entidade.motivo, [Validators.required, Validators.minLength(3)]],
      autorizador: [entidade.autorizador, [Validators.required]],
      incluidoPor: [entidade.incluidoPor, [Validators.required]],
      visitaVisitanteList: this.criarVisitaVisitanteList(
        entidade.visitaVisitanteList
      ),
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
      visitante: [entidade.visitante, [Validators.required]],
      telefone: [entidade.telefone, [Validators.required]],
      email: [entidade.email, []],
      entidadeRepresentante: [entidade.entidadeRepresentante, []],
      saida: [entidade.saida, []],
      saidaUsuario: [entidade.saidaUsuario, []],
    });
    return result;
  }

  criarFiltro(entidade: VisitaFiltroDTO): FormGroup {
    entidade = entidade || new VisitaFiltroDTO();
    let result = this._fb.group({
      autorizadorList: [entidade.autorizadorList, []],
      cpf: [entidade.cpf, []],
      destinoLocalList: [entidade.destinoLocalList, []],
      entradaFim: [entidade.entradaFim, []],
      entradaInicio: [entidade.entradaInicio, []],
      entradaLocalList: [entidade.entradaLocalList, []],
      incluidoPorList: [entidade.incluidoPorList, []],
      nome: [entidade.nome, []],
    });
    return result;
  }

}
