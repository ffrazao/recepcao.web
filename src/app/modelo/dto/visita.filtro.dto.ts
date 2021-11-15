import { FiltroIdDTO } from "./filtro-id.dto";
import { Local } from "../entidade/local";
import { Funcionario } from "../entidade/funcionario";
import { Usuario } from "../entidade/usuario";

export class VisitaFiltroDTO extends FiltroIdDTO {
  autorizadorList: Funcionario[];
  cpf: string;
  destinoLocalList: Local[];
  entradaFim: Date | string;
  entradaInicio: Date | string;
  entradaLocalList: Local[];
  incluidoPorList: Usuario[];
  nome: string;
}
