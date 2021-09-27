import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Pessoa } from "../../modelo/entidade/pessoa";
import { PessoaEndereco } from "../../modelo/entidade/pessoa-endereco";
import { Funcionario } from "../../modelo/entidade/funcionario";
import { Visitante } from "../../modelo/entidade/visitante";
import { Endereco } from "../../modelo/entidade/endereco";
import { Lotacao } from "../../modelo/entidade/lotacao";

@Injectable({
  providedIn: "root",
})
export class FormService {

  constructor(private _fb: FormBuilder) { }

  criar(entidade: Pessoa): FormGroup {
    entidade = entidade ? entidade : new Pessoa();
    let result = this._fb.group({
      id: [entidade.id, []],
      nome: [entidade.nome, []],
      pessoaTipo: [entidade.pessoaTipo, []],
      cpfCnpj: [entidade.cpfCnpj, []],
      email: [entidade.email, []],
      contato1: [entidade.contato1, []],
      contato2: [entidade.contato2, []],
      contato3: [entidade.contato3, []],
      pessoaEnderecoList: this.criarPessoaEnderecoList(entidade.pessoaEnderecoList),
      funcionario: this.criarFuncionario(entidade.funcionario),
      visitante: this.criarVisitante(entidade.visitante),
    });
    return result;
  }

  criarPessoaEnderecoList(lista: PessoaEndereco[]) {
    lista = lista ? lista : new Array<PessoaEndereco>();
    const listaCtrl = [];
    for (const ent of lista) {
      listaCtrl.push(this.criarPessoaEndereco(ent));
    }
    const result = this._fb.array(listaCtrl, [Validators.required]);
    return result;
  }

  criarPessoaEndereco(entidade: PessoaEndereco): FormGroup {
    entidade = entidade ? entidade : new PessoaEndereco();
    let result = this._fb.group({
      id: [entidade.id, []],
      endereco: this.criaEndereco(entidade.endereco),
    });
    return result;
  }

  criarFuncionario(entidade: Funcionario) {
    entidade = entidade ? entidade : new Funcionario();
    let result = this._fb.group({
      id: [entidade.id, []],
      matricula: [entidade.matricula, []],
      ramal: [entidade.ramal, []],
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

  criarVisitante(entidade: Visitante) {
    entidade = entidade ? entidade : new Visitante();
    let result = this._fb.group({
      id: [entidade.id, []],
      tefone: [entidade.tefone, []],
      email: [entidade.email, []],
      entidadeRepresentante: [entidade.entidadeRepresentante, []],
      foto: [entidade.foto, []],
    });
    return result;
  }

  criaEndereco(entidade: Endereco) {
    entidade = entidade ? entidade : new Endereco();
    let result = this._fb.group({
      id: [entidade.id, []],
      logradouro: [entidade.logradouro, []],
      complemento: [entidade.complemento, []],
      numero: [entidade.numero, []],
      bairro: [entidade.bairro, []],
      cidade: [entidade.cidade, []],
      uf: [entidade.uf, []],
      cep: [entidade.cep, []],
    });
    return result;
  }

}
