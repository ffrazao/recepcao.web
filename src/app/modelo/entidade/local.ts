import { EntidadeId } from '../entidade-id';
import { Endereco } from './endereco';
import { UnidadeOrganizacional } from './unidade-organizacional';

export class Local implements EntidadeId {

    public id: number;
    public nome: string;
    public unidadeOrganizacional: UnidadeOrganizacional;
    public endereco: Endereco;

}