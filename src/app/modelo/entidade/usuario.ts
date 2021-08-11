import { EntidadeId } from "../entidade-id";
import { Pessoa } from "./pessoa";

export class Usuario implements EntidadeId {

    public id: number;
    public login: string;
    public senha: string;
    public foto: number;
    public email: string;
    public perfil: string;
    public pessoa: Pessoa;
    public ativo: string;
    public recuperarSenhaToken: string;
    public recuperarSenhaExpira: number;

}