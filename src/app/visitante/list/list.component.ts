import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pessoa } from 'src/app/modelo/entidade/pessoa';
import { RestService } from '../service/rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dados: Pessoa[];

  constructor(
    private _route: ActivatedRoute,
    private _restService: RestService,
  ) { }

  ngOnInit(): void {
    debugger;
    this.dados = this._route.snapshot.data[0];
  }

}
