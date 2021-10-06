import { Component, Input, OnInit } from "@angular/core";
import { FormArray } from "@angular/forms";
import { PessoaEndereco } from "src/app/modelo/entidade/pessoa-endereco";
import { FormService } from "../service/form.service";

@Component({
  selector: "app-pessoa-endereco",
  templateUrl: "./pessoa-endereco.component.html",
  styleUrls: ["./pessoa-endereco.component.scss"],
})
export class PessoaEnderecoComponent implements OnInit {
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
    this.dados.push(this._formService.criarPessoaEndereco(new PessoaEndereco()));
  }

  editar(pos: number) {
    // this.dados.push(this._formService.criarPessoaEndereco(new PessoaEndereco()));
  }

  excluir(pos: number) {
    this.dados.removeAt(pos);
  }

}
