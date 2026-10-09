import { Produto } from "./models/Produto";
import { Televisao } from "./models/Televisao";
import { Smartphone } from "./models/Smartphone";
import readline from "readline-sync";

console.log("=== COMERCIO ===");

let codigo: number = Number (readline.question("codigo: "));
let fabricante = readline.question("fabricante: ");
let preco: number = Number(readline.question("Salário: "));

let produto = new Produto(
    codigo,
    fabricante,
    preco
);

console.log(Produto);
console.log("==========");

console.log("\n=== CADASTRO ===");


let codigos = readline.question("codigo do smartphone: ");
let fabricantes: readline.question("fabricante");
let precos: number = Number(readline.question("\nPreco"));
let tamanho: number = Number(
    readline.question("Bonus: "));

let televisao = new Televisao(
    codigos,
    fabricantes,
    precos,
    tamanho
);

console.log(televisao);
console.log("==========");


console.log("\n=== CADASTRO DO Smartphone ===");

let codigop = readline.question("codigo: ");
let fabricantep: number = Number(readline.question("fabricante: "));
let precop: number = Number(readline.question("Salario: "));
let armazenamento = readline.question("preco: ");

let smartphone = new Smartphone(
    codigop,
    fabricantep,
    salariop,
    armazenamento
)

console.log(Smartphone);
console.log("==========");