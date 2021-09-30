import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { idListComparar, removeMime } from '../../comum/ferramenta/ferramenta-comum';
import { PessoaEndereco } from '../../modelo/entidade/pessoa-endereco';
import { Local } from '../../modelo/entidade/local';
import { Usuario } from '../../modelo/entidade/usuario';
import { Funcionario } from '../../modelo/entidade/funcionario';
import { Visitante } from '../../modelo/entidade/visitante';
import { FormService } from '../service/form.service';
import { EntidadeRepresentante } from 'src/app/modelo/entidade/entidade-representante';
import { RestService } from '../service/rest.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { AnexarService } from '../../comum/servico/anexar/anexar.service';
import { AnexarTipo } from 'src/app/comum/servico/anexar/anexar-tipo';

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
    private _rest: RestService,
    private _form: FormService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private _mensagem: MensagemService,
    private _anexar: AnexarService,
  ) {
  }

  ngOnInit(): void {
    this.formulario = this._form.criar(this._activatedRoute.snapshot.data[0]);
    this.localList = this._activatedRoute.snapshot.data[1];
    this.usuarioList = this._activatedRoute.snapshot.data[2];
    this.entidadeRepresentanteList = this._activatedRoute.snapshot.data[3];
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

  salvar() {
    let entidade = this.formulario.value;
    if (entidade.id) {
      this._rest.update(entidade.id, entidade).subscribe(r => {
        this._route.navigate([`pessoa/${entidade.id}`]);
        this._mensagem.sucesso('Dados Salvos', 'Sucesso');
      });
    } else {
      this._rest.create(entidade).subscribe(r => {
        this._route.navigate([`pessoa/${r}`]);
        this._mensagem.sucesso('Dados Salvos', 'Sucesso');
      });
    }
  }

  carregarFoto() {
    this._anexar.carregar([AnexarTipo.IMAGEM], false).subscribe(r => {
      this.formulario.get('visitante.foto').setValue(removeMime(r['IMAGEM'][0]));
    });
  }

}
