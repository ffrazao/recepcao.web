import { Component, Input, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";

import { VisitaVisitante } from "../../modelo/entidade/visita-visitante";
import { FormService } from "../service/form.service";
import { idListComparar } from '../../comum/ferramenta/ferramenta-comum';
import { RestService as EntidadeRepresentanteRestService } from "../../entidade-representante/service/rest.service";
import { RestService as VisitanteRestService } from "../../visitante/service/rest.service";
import { EntidadeRepresentante } from "../../modelo/entidade/entidade-representante";

@Component({
  selector: "app-visita-visitante",
  templateUrl: "./visita-visitante.component.html",
  styleUrls: ["./visita-visitante.component.scss"],
})
export class VisitaVisitanteComponent implements OnInit {
  @Input()
  dados: FormArray;
  entidadeRepresentanteList: EntidadeRepresentante[];

  constructor(
    private _visitanteRestService: VisitanteRestService,
    private _entidadeRepresentanteRestService: EntidadeRepresentanteRestService,
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    this._entidadeRepresentanteRestService.filtrar().subscribe(r => {
      this.entidadeRepresentanteList = r;
    });
  }

  incluir() {
    this.dados.push(this._formService.criarVisitaVisitante(new VisitaVisitante()));
  }

  editar(pos: number) {
    // this.dados.push(this._formService.criarVisitaVisitante(new VisitaVisitante()));
  }

  excluir(pos: number) {
    this.dados.removeAt(pos);
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  encontraVisitante(event: FocusEvent) {
    console.log(event);
    let cpf = (event.target as HTMLInputElement).value;
    
  }

}
