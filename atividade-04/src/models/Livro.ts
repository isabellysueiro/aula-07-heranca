import { Item } from "./Item";

export class Livro extends Item {

    private autor: string;
    private npaginas: number;

    constructor(
        titulo: string,
        anoPublicado: number,
        autor: string,
        npaginas: number
    ) {
        super(titulo, anoPublicado);

        this.autor = autor;
        this.npaginas = npaginas;
    }

    public get getAutor(): string {
        return this.autor;
    }

    public get getNpaginas(): number {
        return this.npaginas;
    }

    public setAutor(novoAutor: string) {
        if (novoAutor.trim().length === 0) {
            console.log("\n ERRO: O campo não pode ser vazio");
            return;
        }
        this.autor = this.autor;
    }

    public setNpaginas(novoNpaginas: number) {
        if (novoNpaginas === 0) {
            console.log("\n ERRO: O campo não pode ser vazio!");
            return;
        }
        this.npaginas = this.npaginas;
    }
}
