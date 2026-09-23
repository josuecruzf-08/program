import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese la cantidad de productos fabricados: `, (cantidad) => {
    const cant = Number(cantidad);

    console.log(`Productos fablricados: ${cant}`);

    for (let i= 1 ; i <= cant; i++) {

        if (i % 3 === 0) {
            console.log(` El producto ${i} Necesita revision`);
        };
    };

    rl.close();
});