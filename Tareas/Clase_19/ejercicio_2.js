import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const precio_por_hora = 2.25;

rl.question("Ingrese la duración de cada préstamo en horas: ", (horas) => {
    const horasPrestamo = Number(horas);

    let recaudacionTotal = 0;

    for (let i = 1; i <= 4; i++) {
        const cobroPrestamo = horasPrestamo * precio_por_hora;
        recaudacionTotal = recaudacionTotal + cobroPrestamo;
    }

    console.log(`La recaudación total del día es de: $${recaudacionTotal.toFixed(2)}`);

    rl.close();
});