import { EntidadeId } from '../entidade-id';
import { UnidadeOrganizacional } from './unidade-organizacional';
import { Funcionario } from './funcionario';

export class Lotacao implements EntidadeId {

    public id: number;
    public unidadeOrganizacional: UnidadeOrganizacional;
    public ramal: string;

}