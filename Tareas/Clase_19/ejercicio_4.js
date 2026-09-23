import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de entradas vendidas diariamente: ", (entradas) => {
    const entradasDiarias = Number(entradas);

    let totalEntradas = 0;

    for (let i = 1; i <= 5; i++) {
        totalEntradas = totalEntradas + entradasDiarias;
        console.log(`Entradas acumuladas al finalizar el día ${i}: ${totalEntradas}`);
    }

    console.log(`\nLa cantidad total de entradas vendidas en los 5 días es de: ${totalEntradas}`);

    rl.close();
});