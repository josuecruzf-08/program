import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la base del rectangulo: ", function(base){
    rl.question("Ingrese la altura del rectangulo: ", function(altura){

        const B = Number(base);
        const H = Number(altura);

        const A = base * altura;

        console.log(`El area del rectángulo es: ${A}`);

            rl.close();
    });
});