export class Funcionario {

    private nome: string;
    private matricula: number;
    private salario: number;

    constructor(
        nome: string,
        matricula: number,
        salario: number
    ) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
    }

    public get getNome(): string {
        return this.nome;
    }

    public get getMatricula(): number {
        return this.matricula;
    }

    public get getSalario(): number {
        return this.salario;
    }

    public setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }
        this.nome = novoNome;
    }

    public setMatricula(novoMatricula: number) {
        if (novoMatricula === 0) {
            console.log("\n ERRO: A matricula não pode ser vazio!");
            return;
        }
        this.matricula = novoMatricula;
    }

    public setSalario(novoSalario: number) {
        if (novoSalario === 0) {
            console.log("\n ERRO: O Salario não pode ser vazio!");
            return;
        }
        this.salario = novoSalario;
    }
}
