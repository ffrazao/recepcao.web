import { EntidadeId } from '../entidade-id';
import { Funcionario } from './funcionario';
import { Local } from './local';
import { Usuario } from './usuario';
import { VisitaVisitante } from './visita-visitante';

export class Visita implements EntidadeId {

    public id: number;
    public entrada: Date;
    public localEntrada: Local;
    public localVisita: Local;
    public motivo: string;
    public autorizador: Funcionario;
    public incluidoPor: Usuario;
    public saida: Date;
    public visitaVisitanteList: VisitaVisitante[];

}