import { Pessoa } from './pessoa';
import { EntidadeRepresentante } from './entidade-representante';

export class Visitante extends Pessoa {

    public tefone: string;
    public email: string;
    public entidadeRepresentante: EntidadeRepresentante;
    public foto: number;

}
