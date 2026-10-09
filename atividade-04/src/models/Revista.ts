import { Item } from "./Item";

export class Revista extends Item {

    private edicao: string;

    constructor(
        titulo: string,
        anoPublicado: number,
        edicao: string
    ) {
        super(
            titulo,
            anoPublicado
        );
        this.edicao = edicao;
    }

    public get getEdicao(): string {
        return this.edicao;
    }

    public setEdicao(novaEdicao: string) {
        if (novaEdicao.trim().length === 0) {
            console.log("\n ERRO: O autor não pode ser vazio!");
            return;
        }
        this.edicao = novaEdicao;
    }
}