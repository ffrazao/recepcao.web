import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Funcionario } from 'src/app/modelo/entidade/funcionario';
import { Local } from 'src/app/modelo/entidade/local';
import { Usuario } from 'src/app/modelo/entidade/usuario';

import { Visita } from 'src/app/modelo/entidade/visita';
import { VisitaVisitante } from 'src/app/modelo/entidade/visita-visitante';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
  constructor(
    private _fb: FormBuilder
  ) { }

  criar(entidade: Visita): FormGroup {
    entidade = entidade ? entidade : new Visita();
    let result =  this._fb.group({
      id: [entidade.id, []],
      entradaLocal: this.criarLocal(entidade.entradaLocal),
      entrada: [entidade.entrada, []],
      destinoLocal: this.criarLocal(entidade.destinoLocal),
      motivo: [entidade.motivo, []],
      autorizador: this.criarFuncionario(entidade.autorizador),
      incluidoPor: this.criarUsuario(entidade.incluidoPor),
      visitaVisitanteList: this.criarVisitaVisitanteList(entidade.visitaVisitanteList),
    });
    return result;
  }


  criarLocal(entidade: Local) {

  }

  criarFuncionario(entidade: Funcionario) {

  }

  criarUsuario(entidade: Usuario) {

  }

  criarVisitaVisitanteList(lista: VisitaVisitante[]) {

  }

}
