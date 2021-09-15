import { Component, Input, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";
import { VisitaVisitante } from "src/app/modelo/entidade/visita-visitante";
import { FormService } from "../service/form.service";

@Component({
  selector: "app-visita-visitante",
  templateUrl: "./visita-visitante.component.html",
  styleUrls: ["./visita-visitante.component.scss"],
})
export class VisitaVisitanteComponent implements OnInit {
  @Input()
  dados: FormArray;

  constructor(
    private _formService: FormService
  ) {}

  ngOnInit(): void {
    debugger;
    console.log(this.dados);
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

}
