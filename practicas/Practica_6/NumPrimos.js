import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número : ", (numero) => {
    const n = Number(numero);

    if ( n < 1) {
        console.log("Error: Ingrese un número entero mayor o igual a 1.");
        rl.close();
        return;
    }

    let esPrimo = true;

    if (n <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        console.log(`El número ${n} ES un número primo.`);
    } else {
        console.log(`El número ${n} NO es un número primo.`);
    }

    console.log(`\nNúmeros primos entre 1 y ${n}:`);

    for (let i = 1; i <= n; i++) {
        let contadorDivisores = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                contadorDivisores++;
            }
        }

        if (contadorDivisores == 2) {
            console.log(` -> ${i}`);
        }
    }

    rl.close();
});