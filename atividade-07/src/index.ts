import { Conta } from "./models/Conta";
import { Corrente } from "./models/Corrente";
import { Poupanca } from "./models/Poupanca";
import readline from "readline-sync";

console.log("=== CONTA BANCÁRIA ===");

let titular: string = readline.question("titular: ");
let agencia: number = Number (readline.question("Agência: "));
let saldo: number = Number(
    readline.question("Saldo: "));

let conta = new Conta(
    titular,
    agencia,
    saldo
);

console.log(saldo);
console.log("==========");

console.log("\n=== CADASTRO ===");


let titularc = readline.question("titular: ");
let agenciac: number = Number(
    readline.question("agencia"));
let saldoc: number = Number(
    readline.question("Saldo: "));
let limite: number = Number(
    readline.question("limite: "));

let corrente = new Corrente(
    titularc,
    agenciac,
    saldoc,
    limite
);

console.log(corrente);
console.log("==========");



let titularp = readline.question("titular: ");
let agenciap: number = Number(readline.question("agencia: "));
let saldop: number = Number(readline.question("Salario: "));
let taxa: number = Number(readline.question("taxa: "));

let poupanca = new Poupanca(
    titularp,
    agenciap,
    saldop,
    taxa
)

console.log(poupanca);
console.log("==========");