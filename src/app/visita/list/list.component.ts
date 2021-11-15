import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Visita } from "src/app/modelo/entidade/visita";
import { VisitaVisitante } from "src/app/modelo/entidade/visita-visitante";
import { RestService } from "../service/rest.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit {
  dados: Visita[];

  constructor(
    private _route: ActivatedRoute,
    private _restService: RestService
  ) {}

  ngOnInit(): void {
    debugger;
    this.dados = this._route.snapshot.data[0];
  }

  registrarSaida(info: VisitaVisitante) {
    this._restService.registrarSaida(info.id).subscribe((r) => {
      console.log("r", r);
      info.saida = r["saida"];
      info.saidaUsuario = r["saidaUsuario"];
    });
  }

  ordena(dados: Visita[]) {
    return dados.sort((a, b) => {
      if (!(a.entrada instanceof Date)) {
        a.entrada = new Date(a.entrada);
      }
      if (!(b.entrada instanceof Date)) {
        b.entrada = new Date(b.entrada);
      }
      return b.entrada.getTime() - a.entrada.getTime();
    });
  }
}
