import { Component, Input, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";

import { VisitaVisitante } from "../../modelo/entidade/visita-visitante";
import { FormService } from "../service/form.service";
import { idListComparar } from '../../comum/ferramenta/ferramenta-comum';
import { RestService as EntidadeRepresentanteRestService } from "../../entidade-representante/service/rest.service";
import { RestService as VisitanteRestService } from "../../visitante/service/rest.service";
import { EntidadeRepresentante } from "../../modelo/entidade/entidade-representante";
import { VisitanteFiltroDTO } from "src/app/modelo/dto/visitante.filtro.dto";

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
    let entidade = this._formService.criarVisitaVisitante(new VisitaVisitante());
    entidade['editar'] = true;
    this.dados.push(entidade);
  }

  excluir(pos: number) {
    this.dados.removeAt(pos);
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  encontraVisitante(event: FocusEvent) {
    debugger;
    console.log(event);
    let cpf = (event.target as HTMLInputElement).value;
    this._visitanteRestService.filtro = this._visitanteRestService.filtro || new VisitanteFiltroDTO();
    this._visitanteRestService.filtrar().subscribe(r => {
      console.log(r);
    });
  }

}
