import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { idListComparar } from 'src/app/comum/ferramenta/ferramenta-comum';

import { Local } from '../../modelo/entidade/local';
import { Usuario } from '../../modelo/entidade/usuario';
import { FormService } from '../service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formulario: FormGroup;

  localList: Local[];
  usuarioList: Usuario[];

  constructor(
    private _form: FormService,
    private _route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.formulario = this._form.criar(this._route.snapshot.data[0]);
    this.localList = this._route.snapshot.data[1];
    this.usuarioList = this._route.snapshot.data[2];
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  filtraLocal(item: Local, param: string[]) {
    return item.portaria === param[0];
  }

}
