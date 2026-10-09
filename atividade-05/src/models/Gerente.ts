import { Funcionario } from "./Funcionario";

export class Gerente extends Funcionario {

    private bonus: number;

    constructor(
        nome: string,
        matricula: number,
        salario: number,
        bonus: number
    ) {
        super(
            nome,
            matricula,
            salario
        );

        this.bonus = bonus;
    }

    public get getBonus(): number {
        return this.bonus;
    }

    public setBonus(novoBonus: number) {
        if (novoBonus === 0) {
            console.log("\n ERRO: O Bonus não pode ser vazio!");
            return;
        }
        this.bonus = novoBonus;
    }
}