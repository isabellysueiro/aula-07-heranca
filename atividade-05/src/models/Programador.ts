import { Funcionario } from "./Funcionario";

export class Programador extends Funcionario {

    private linguagem: string;

    constructor(
        nome: string,
        matricula: number,
        salario: number,
        linguagem: string
    ) {
        super(
            nome,
            matricula,
            salario
        );
        this.linguagem = linguagem;
    }

    public get getLinguagem(): string {
        return this.linguagem;
    }

    public setLinguagem(novaLinguagem: string) {
        if (novaLinguagem.trim().length === 0) {
            console.log("\n ERRO: O Linguagem não pode ser vazio!");
            return;
        }
        this.linguagem = novaLinguagem;
    }
}