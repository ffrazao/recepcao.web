import { EntidadeRepresentante } from './entidade-representante';
import { Pessoa } from './pessoa';

export class Visitante {

    public id: number;
    public telefone: string;
    public email: string;
    public entidadeRepresentante: EntidadeRepresentante;
    public foto: number;
    public pessoa: Pessoa;

}
