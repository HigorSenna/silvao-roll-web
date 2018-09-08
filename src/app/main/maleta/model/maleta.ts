import { Premio } from './../../premio/model/premio';
export class Maleta {
    public id?: number;
    public nomeImagem?: string;
    public caminhoLocalizacaoImagem: string;
    public premios?: Premio[];
}