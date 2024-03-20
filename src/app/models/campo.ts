import { TipoCampo } from '../enums/tipo-campo';

export type Campo = {
    nome: string;
    titulo: string;
    tipo: TipoCampo;
    obrigatorio: boolean;
    mascara?: string;
};
