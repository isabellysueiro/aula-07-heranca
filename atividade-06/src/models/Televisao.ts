import { Produto } from "./Produto";

export class Televisao extends Produto {

    private tamanho: number;

    constructor(
        codigo: number,
        fabricante: string,
        preco: number,
        tamanho: number
    ) {
        super(
            codigo,
            fabricante,
            preco
        );

        this.tamanho = tamanho;
    }

    public get getTamanho(): number {
        return this.tamanho;
    }

    public setTamanho(novoTamanho: number) {
        if (novoTamanho === 0) {
            console.log("\n ERRO: O Bonus não pode ser vazio!");
            return;
        }
        this.tamanho = novoTamanho;
    }
}