import { Conta } from "./Conta";

export class Poupanca extends Conta {

    private taxa: number;

    constructor(
        titular: string,
        agencia: number,
        saldo: number,
        taxa: number
    ) {
        super(
            titular,
            agencia,
            saldo
        );
        this.taxa = taxa;
    }

    public get getTaxa(): number {
        return this.taxa;
    }

    public setTaxa(novaTaxa: number) {
        if (novaTaxa === 0) {
            console.log("\n ERRO: A taxa não pode ser vazio!");
            return;
        }
        this.taxa = novaTaxa;
    }
}