import { EntidadeId } from '../entidade-id';
import { PessoaTipo } from '../dominio/pessoa-tipo';
import { PessoaEndereco } from './pessoa-endereco';
import { Funcionario } from './funcionario';
import { Visitante } from './visitante';

export class Pessoa implements EntidadeId {

    public id: number;
    public nome: string;
    public pessoaTipo: PessoaTipo;
    public cpfCnpj: string;
    public email: string;
    public contato1: string;
    public contato2: string;
    public contato3: string;
    public pessoaEnderecoList: PessoaEndereco[] = [];
    public funcionario: Funcionario;
    public visitante: Visitante;
}
