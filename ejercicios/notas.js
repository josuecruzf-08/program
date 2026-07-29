import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera nota: ", function(nota1) {
    rl.question("Ingrese la segunda nota: ", function(nota2) {
        rl.question("Ingrese la tercera nota: ", function(nota3) {

            const not1 = Number(nota1);
            const not2 = Number(nota2);
            const not3 = Number(nota3);

            const promedio = (not1 + not2 + not3) / 3;

            console.log(`Su promedio es: ${promedio}`);

            rl.close();
        });
    });
});
