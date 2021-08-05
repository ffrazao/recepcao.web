import { Injectable } from '@angular/core';
import { ConverteQuiloService } from './converte-quilo/converte-quilo.service';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor(
    private _converteQuiloService: ConverteQuiloService,
  ) { }

}
