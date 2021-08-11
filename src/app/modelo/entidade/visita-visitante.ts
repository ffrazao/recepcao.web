import { EntidadeId } from '../entidade-id';
import { Visitante } from './visitante';
import { EntidadeRepresentante } from './entidade-representante';

export class VisitaVisitante implements EntidadeId {

    public id: number;
    public visitante: Visitante;
    public telefone: string;
    public email: string;
    public entidadeRepresentante: EntidadeRepresentante;

}