import { EntidadeId } from '../entidade-id';
import { Endereco } from './endereco';

export class PessoaEndereco implements EntidadeId {

    public id: number;
    public endereco: Endereco;

}