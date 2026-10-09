import { Item } from "./src/models/Item";
import { Livro } from "./src/models/Livro";
import { Revista } from "./src/models/Revista";
import readline from "readline-sync";


console.log("=== PEDIDO ===");

let titulo: string = readline.question("Informe o título: ");
let anoPublicado: number = Number(
    readline.question("Informe o ano publicado: "));

let item = new Item(
    titulo,
    anoPublicado
);

console.log(item);
console.log("==========");

console.log("\n=== PEDIDO DO LIVRO ===");


let tituloL = readline.question("Informe o título do livro: ");
let anoPublicadoL: number = Number(
    readline.question("Informe o ano em que o livro foi publicado: "));
let autor = readline.question("Informe o autor: ");
let npaginas: number = Number(
    readline.question("Informe o número de páginas: "));

let livro = new Livro(
    tituloL,
    anoPublicadoL,
    autor,
    npaginas
);

console.log(livro);
console.log("==========");


console.log("\n=== PEDIDO DA REVISTA ===");

let tituloR = readline.question("Informe o título da revista: ");
let anoPublicadoR: number = Number(
    readline.question("Inform o ano publicado da Revista: "));
let edicao = readline.question("Informe a edição: ");

let revista = new Revista(
    tituloR,
    anoPublicadoR,
    edicao
)

console.log(revista);
console.log("==========");





