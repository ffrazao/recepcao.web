import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { idListComparar, removeMime } from '../../comum/ferramenta/ferramenta-comum';
import { Local } from '../../modelo/entidade/local';
import { FormService } from '../service/form.service';
import { RestService } from '../service/rest.service';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { Lotacao } from '../../modelo/entidade/lotacao';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  lotacaoList: Lotacao[];

  constructor(
    private _rest: RestService,
    private _form: FormService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router,
    private _mensagem: MensagemService,
  ) {
  }

  ngOnInit(): void {
    this.formulario = this._form.criar(this._activatedRoute.snapshot.data[0]);
    this.lotacaoList = this._activatedRoute.snapshot.data[1];
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  filtraLocal(item: Local, param: string[]) {
    return item.portaria === param[0];
  }

  incluirLotacao() {
    let item = this._form.criarLotacao(new Lotacao());
    item['editar'] = true;
    (this.formulario.controls.lotacaoList as FormArray).push(item);
  }

  excluirLotacao(item: number) {
    (this.formulario.controls.lotacaoList as FormArray).removeAt(item);
  }

  salvar() {
    let entidade = this.formulario.value;
    if (entidade.id) {
      this._rest.update(entidade.id, entidade).subscribe(r => {
        this._route.navigate([`funcionario/${entidade.id}`]);
        this._mensagem.sucesso('Dados Salvos', 'Sucesso');
      });
    } else {
      this._rest.create(entidade).subscribe(r => {
        this._route.navigate([`funcionario/${r}`]);
        this._mensagem.sucesso('Dados Salvos', 'Sucesso');
      });
    }
  }

}
