import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { idListComparar } from '../../comum/ferramenta/ferramenta-comum';
import { Local } from '../../modelo/entidade/local';
import { Usuario } from '../../modelo/entidade/usuario';
import { FormService } from '../service/form.service';
import { Funcionario } from '../../modelo/entidade/funcionario';
import { MensagemService } from '../../comum/servico/mensagem/mensagem.service';
import { RestService } from '../../pessoa/service/rest.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  localList: Local[];
  usuarioList: Usuario[];
  funcionarioList: Funcionario[];

  constructor(
    private _form: FormService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _rest: RestService,
    private _mensagem: MensagemService,
  ) {
  }

  ngOnInit(): void {
    this.formulario = this._form.criar(this._activatedRoute.snapshot.data[0]);
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

  salvar() {
    let entidade = this.formulario.value;
    if (entidade.id) {
      this._rest.update(entidade.id, entidade).subscribe(r => {
        this._router.navigate([`visita/${entidade.id}`]);
        this._mensagem.sucesso('Dados Salvos', 'Sucesso');
      });
    } else {
      this._rest.create(entidade).subscribe(r => {
        this._router.navigate([`visita/${r}`]);
        this._mensagem.sucesso('Dados Salvos', 'Sucesso');
      });
    }

  }

}
