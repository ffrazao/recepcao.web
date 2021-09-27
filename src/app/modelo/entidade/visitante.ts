import { Pessoa } from './pessoa';
import { EntidadeRepresentante } from './entidade-representante';

export class Visitante {

    public id: number;
    public telefone: string;
    public email: string;
    public entidadeRepresentante: EntidadeRepresentante;
    public foto: number;

}
