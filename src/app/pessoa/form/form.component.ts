import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { idListComparar } from 'src/app/comum/ferramenta/ferramenta-comum';
import { PessoaEndereco } from 'src/app/modelo/entidade/pessoa-endereco';

import { Local } from '../../modelo/entidade/local';
import { Usuario } from '../../modelo/entidade/usuario';
import { Funcionario } from '../../modelo/entidade/funcionario';
import { Visitante } from '../../modelo/entidade/visitante';
import { FormService } from '../service/form.service';
import { EntidadeRepresentante } from 'src/app/modelo/entidade/entidade-representante';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  localList: Local[];
  usuarioList: Usuario[];
  entidadeRepresentanteList: EntidadeRepresentante[];

  constructor(
    private _form: FormService,
    private _route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.formulario = this._form.criar(this._route.snapshot.data[0]);
    this.localList = this._route.snapshot.data[1];
    this.usuarioList = this._route.snapshot.data[2];
    this.entidadeRepresentanteList = this._route.snapshot.data[3];
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  filtraLocal(item: Local, param: string[]) {
    return item.portaria === param[0];
  }

  incluirPessoaEndereco() {
    let item = this._form.criarPessoaEndereco(new PessoaEndereco());
    item['editar'] = true;
    (this.formulario.controls.pessoaEnderecoList as FormArray).push(item);
  }

  excluirPessoaEndereco(item: number) {
    (this.formulario.controls.pessoaEnderecoList as FormArray).removeAt(item);
  }

  get eFuncionario() {
    return this.formulario?.contains('funcionario');
  }

  set eFuncionario(existe: boolean) {
    if (existe) {
      this.formulario?.addControl('funcionario', this._form.criarFuncionario(new Funcionario()));
    } else {
      this.formulario?.removeControl('funcionario');
    }
  }

  get eVisitante() {
    return this.formulario?.contains('visitante');
  }

  set eVisitante(existe: boolean) {
    if (existe) {
      this.formulario?.addControl('visitante', this._form.criarVisitante(new Visitante()));
    } else {
      this.formulario?.removeControl('visitante');
    }
  }

}
