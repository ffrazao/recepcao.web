import { FiltroIdDTO } from './filtro-id.dto';

export class VisitaFiltroDTO extends FiltroIdDTO {

    visitante: string;
    entidadeRepresentante: string;
    local: string;
    autorizador: string;
    incluidoPor: string;
    dataInicio: Date;
    dataFim: Date;

}
