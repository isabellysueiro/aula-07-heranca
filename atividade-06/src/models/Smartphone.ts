import { Produto } from "./Produto";

export class Smartphone extends Produto {

    private armazenamento: number;

    constructor(
        codigo: number,
        fabricante: string,
        preco: number,
        armazenamento: number
    ) {
        super(
            codigo,
            fabricante,
            preco
        );
        this.armazenamento = armazenamento;
    }

    public get getArmazenamento(): number {
        return this.armazenamento;
    }

    public setArmazenamento(novaArmazenamento: number) {
        if (novaArmazenamento  === 0) {
            console.log("\n ERRO: Oarmazenamento não pode ser vazio!");
            return;
        }
        this.armazenamento = novaArmazenamento;
    }
}