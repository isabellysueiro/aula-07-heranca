import { Funcionario } from "./models/Funcionario";
import { Gerente } from "./models/Gerente";
import { Programador } from "./models/Programador";
import readline from "readline-sync";

console.log("=== CADASTRO ===");

let nome: string = readline.question("Nome: ");
let matricula: number = Number(
    readline.question("Matrícula: "));
let salario: number = Number(
    readline.question("Salário: "));

let funcionario = new Funcionario(
    nome,
    matricula,
    salario
);

console.log(Funcionario);
console.log("==========");

console.log("\n=== CADASTRO ===");


let nomeg = readline.question("Nome do gerente: ");
let matriculag: number = Number(
    readline.question("Matricula"));
let salariog: number = Number(
    readline.question("Salário"));
let bonus: number = Number(
    readline.question("Bonus: "));

let gerente = new Gerente(
    nomeg,
    matriculag,
    salariog,
    bonus
);

console.log(gerente);
console.log("==========");


console.log("\n=== CADASTRO DO PROGRAMADOR ===");

let nomep = readline.question("Nome: ");
let matriculap: number = Number(readline.question("Matricula: "));
let salariop: number = Number(readline.question("Salario: "));
let linguagem = readline.question("Linguagem de programação: ");

let programador = new Programador(
    nomep,
    matriculap,
    salariop,
    linguagem
)

console.log(programador);
console.log("==========");