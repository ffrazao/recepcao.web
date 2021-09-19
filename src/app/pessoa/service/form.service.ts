import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Funcionario } from "src/app/modelo/entidade/funcionario";
import { Local } from "src/app/modelo/entidade/local";
import { Usuario } from "src/app/modelo/entidade/usuario";

import { Pessoa } from "src/app/modelo/entidade/pessoa";
import { PessoaEndereco } from "src/app/modelo/entidade/pessoa-endereco";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private _fb: FormBuilder) {}

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
      endereco: [entidade.endereco, []],
    });
    return result;
  }
}
