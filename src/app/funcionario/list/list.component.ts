import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Funcionario } from '../../modelo/entidade/funcionario';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dados: Funcionario[];

  constructor(
    private _route: ActivatedRoute,
    private _restService: RestService,
  ) { }

  ngOnInit(): void {
    debugger;
    this.dados = this._route.snapshot.data[0];
  }

}
