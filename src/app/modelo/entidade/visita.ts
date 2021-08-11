import { EntidadeId } from '../entidade-id';
import { Funcionario } from './funcionario';
import { Local } from './local';
import { Usuario } from './usuario';

export class Visita implements EntidadeId {

    public id: number;
    public entrada: Date;
    public local: Local;
    public saida: Date;
    public motivo: string;
    public autorizador: Funcionario;
    public incluidoPor: Usuario;

}