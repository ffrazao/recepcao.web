import { Lotacao } from './lotacao';
import { Pessoa } from './pessoa';

export class Funcionario  {

    public id: number;
    public matricula: string;
    public ramal: string;
    public pessoa: Pessoa;
    public lotacaoList: Lotacao[];

}
