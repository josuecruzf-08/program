import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número entero positivo: ", (numero) => {
    const num = Number(numero);

    if (num < 0) {
        console.log("Error: Debe ingresar un número entero positivo.");
        rl.close();
        return;
    }

    let factorial = 1;

    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }

    console.log(`El factorial de ${num} (${num}!) es: ${factorial}`);

    rl.close();
});