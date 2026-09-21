import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el gasto diario en transporte: ", (gasto) => {
    const gastoDiario = Number(gasto);

    let gastoAcumulado = 0;

    for (let i = 1; i <= 6; i++) {
        gastoAcumulado = gastoAcumulado + gastoDiario;
        console.log(`El gasto acumulado en el día ${i} es de: $${gastoAcumulado.toFixed(2)}`);
    }

    console.log(`\nEl gasto total final en transporte durante los 6 días es de: $${gastoAcumulado.toFixed(2)}`);

    rl.close();
});