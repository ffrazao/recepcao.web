import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Usuario } from 'src/app/modelo/entidade/usuario';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  constructor(
    private _fb: FormBuilder
  ) { }

  criar(entidade: Usuario): FormGroup {
    entidade = entidade ? entidade : new Usuario();
    let result =  this._fb.group({
      id: [entidade.id, []],
    });
    return result;
  }

}
