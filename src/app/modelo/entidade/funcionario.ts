import { Lotacao } from './lotacao';
import { Pessoa } from './pessoa';

export class Funcionario extends Pessoa {

    public matricula: string;
    public ramal: string;
    public lotacaoList: Lotacao[];

}
