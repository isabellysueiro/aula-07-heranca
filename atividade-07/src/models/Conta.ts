export class Conta {

    private titular: string;
    private agencia: number;
    private saldo: number;

    constructor(
        titular: string,
        agencia: number,
        saldo: number
    ) {
        this.titular = titular;
        this.agencia = agencia;
        this.saldo = saldo;
    }

    public get getTitular(): string {
        return this.titular;
    }

    public get getAgencia(): number {
        return this.agencia;
    }

    public get getSaldo(): number {
        return this.saldo;
    }

    public setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O Titular não pode ser vazio!");
            return;
        }
        this.titular = novoTitular;
    }

    public setAgencia(novaAgencia: number) {
        if (novaAgencia === 0) {
            console.log("\n ERRO: A Agencia não pode ser vazio!");
            return;
        }
        this.agencia = novaAgencia;
    }

    public setSaldo(novoSaldo: number) {
        if (novoSaldo === 0) {
            console.log("\n ERRO: O Saldo não pode ser vazio!");
            return;
        }
        this.saldo = novoSaldo;
    }
}
