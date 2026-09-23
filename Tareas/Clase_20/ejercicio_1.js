import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese el numero que desea la tabla de multiplicar: `, (numero) =>{

    const num = Number(numero);

    for (let i = 1; i <= 10; i++) {
        let resultado = num * i;
        console.log( `${num} x ${i} = ${resultado}`);
    }

    rl.close();
});