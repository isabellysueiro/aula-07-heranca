export class Produto {

    private codigo: number;
    private fabricante: string;
    private preco: number;

    constructor(
        codigo: number,
        fabricante: string,
        preco: number
    ) {
        this.codigo = codigo;
        this.fabricante = fabricante;
        this.preco = preco;
    }

    public get getCodigo(): number {
        return this.codigo;
    }

    public get getFabricante(): string {
        return this.fabricante;
    }

    public get getPreco(): number {
        return this.preco;
    }

    public setCodigo(novoCodigo: number) {
        if (novoCodigo === 0) {
            console.log("\n ERRO: O Codigo não pode ser vazio!");
            return;
        }
        this.codigo = novoCodigo;
    }

    public setFabricante(novoFabricante: string) {
        if (novoFabricante.trim().length === 0) {
            console.log("\n ERRO: A Fabricante não pode ser vazio!");
            return;
        }
        this.fabricante = novoFabricante;
    }

    public setPreco(novoPreco: number) {
        if (novoPreco === 0) {
            console.log("\n ERRO: O Preco não pode ser vazio!");
            return;
        }
        this.preco = novoPreco;
    }
}
