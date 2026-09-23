import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let paseGratis = 0;

rl.question(`Ingrese la cantidad de Entradas para el museo: `, (cantidad) => {
    const cant = Number(cantidad);

    console.log(`Cantidad de entradas: ${cant}`);

    for (let i = 1; i <= cant; i++) {
        if (i % 5 === 0) {
            console.log(` La entrada ${i} es gratuita`);
            paseGratis++;
        }
    }

    console.log(`Cantidad de entradas gratis: ${paseGratis}`);

    rl.close();
});