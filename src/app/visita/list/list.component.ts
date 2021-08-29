import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Visita } from 'src/app/modelo/entidade/visita';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dados: Visita[];

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    debugger;
    console.log(1);
    this.dados = this._route.snapshot.data[0];
  }

}
