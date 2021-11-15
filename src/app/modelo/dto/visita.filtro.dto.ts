import { FiltroIdDTO } from "./filtro-id.dto";
import { Local } from "../entidade/local";
import { Funcionario } from "../entidade/funcionario";
import { Usuario } from "../entidade/usuario";

export class VisitaFiltroDTO extends FiltroIdDTO {
  autorizadorList: Funcionario[] | number[];
  cpf: string;
  destinoLocalList: Local[] | number[];
  entradaFim: Date | string;
  entradaInicio: Date | string;
  entradaLocalList: Local[] | number[];
  incluidoPorList: Usuario[] | number[];
  nome: string;
}
