import { Component, Input, OnInit } from "@angular/core";
import { FormArray, FormControl } from "@angular/forms";

import { VisitaVisitante } from "../../modelo/entidade/visita-visitante";
import { FormService } from "../service/form.service";
import { idListComparar } from "../../comum/ferramenta/ferramenta-comum";
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
  cpfPesq = "";

  constructor(
    private _visitanteRestService: VisitanteRestService,
    private _entidadeRepresentanteRestService: EntidadeRepresentanteRestService,
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    this._entidadeRepresentanteRestService.filtrar().subscribe((r) => {
      this.entidadeRepresentanteList = r;
    });
  }

  incluir() {
    let entidade = this._formService.criarVisitaVisitante(
      new VisitaVisitante()
    );
    entidade["editar"] = true;
    this.dados.push(entidade);
  }

  excluir(pos: number) {
    this.dados.removeAt(pos);
  }

  idListComparar(o1, o2) {
    return idListComparar(o1, o2);
  }

  encontraVisitante(event: FocusEvent, cpfPesq: string, item: FormControl) {
    if (!cpfPesq || !cpfPesq.trim().length) {
      return;
    }
    this._visitanteRestService.filtro =
      this._visitanteRestService.filtro || new VisitanteFiltroDTO();
    this._visitanteRestService.filtro.cpfCnpj = cpfPesq;
    this._visitanteRestService.filtrar().subscribe((r) => {
      if (r && r.length === 0) {
        alert('Registro não localizado'); 
      } else if (r && r.length === 1) {
          item.get("visitante").patchValue(r[0]);
        item
          .get("telefone")
          .patchValue(
            r[0].telefone
              ? r[0].telefone
              : r[0].pessoa.contato1
              ? r[0].pessoa.contato1
              : ""
          );
        item
          .get("email")
          .patchValue(
            r[0].email ? r[0].email : r[0].pessoa.email ? r[0].pessoa.email : ""
          );
        item
          .get("entidadeRepresentante")
          .patchValue(r[0].entidadeRepresentante);
        console.log(r);
      }
      this.cpfPesq = '';
    });
  }

  setSaida(item: FormControl) {
    let date = new Date();
    let agora = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().substr(0, 16); 
    item.get("saida").patchValue(agora);
  }

  limparSaida(item: FormControl) {
    item.get("saida").patchValue(null);
  }
}
//2021-11-13T02:05