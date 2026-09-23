import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el numero de horas: ", function(horas){

    const hora = Number(horas);
    const min = hora * 60;

    console.log(`El quivalente de ${hora} horas en munitos es: ${min} min`);

    rl.close();
});