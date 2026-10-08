import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;

console.log(`\nHe pensado en un número entre 1 y 50. Intenta adivinarlo.`);

function pedirIntento() {
    rl.question("Ingresa tu número: ", (numero) => {
        const numeroUsuario = Number(numero);
        intentos++;

        if (isNaN(numeroUsuario)) {
            console.log("Por favor, introduce un número válido.");
            pedirIntento();
            return;
        }

        if (numeroUsuario === numeroSecreto) {
            console.log(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
            rl.close();
        } else if (numeroUsuario < numeroSecreto) {
            console.log("El número secreto es MAYOR.");
            pedirIntento();
        } else {
            console.log("El número secreto es MENOR.");
            pedirIntento();
        }
    });
}

pedirIntento();