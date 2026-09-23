import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el primer número (a): ", (numA) => {
    const a = Number(numA);

    rl.question("Ingrese el segundo número (b): ", (numB) => {
        const b = Number(numB);

        rl.question("Ingrese el tercer número (c): ", (numC) => {
            const c = Number(numC);

            if (a === b && b === c) {
                console.log("Los tres números son iguales");
            } else if (a !== b && b !== c && a !== c) {
                console.log("Los tres números son diferentes");
            } else {
                console.log("Hay dos números iguales");
            }

            const mayor = Math.max(a, b, c);
            const menor = Math.min(a, b, c);

            console.log(`El número mayor es ${mayor}`);
            console.log(`El número menor es ${menor}`);

            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay números negativos");
            }

            rl.close();
        });
    });
});