import { Conta } from "./Conta";

export class Corrente extends Conta {

    private limite: number;

    constructor(
        nome: string,
        matricula: number,
        salario: number,
        limite: number
    ) {
        super(
            nome,
            matricula,
            salario
        );

        this.limite = limite;
    }

    public get getLimite(): number {
        return this.limite;
    }

    public setLimite(novoLimite: number) {
        if (novoLimite === 0) {
            console.log("\n ERRO: O Limite não pode ser vazio!");
            return;
        }
        this.limite = novoLimite;
    }
}