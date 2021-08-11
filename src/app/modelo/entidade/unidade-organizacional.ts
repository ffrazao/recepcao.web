import { EntidadeId } from '../entidade-id';

export class UnidadeOrganizacional implements EntidadeId {

    public id: number;
    public nome: string;
    public pai: UnidadeOrganizacional;

}