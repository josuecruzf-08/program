import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", function(nombre){

    console.log(`Hola ${nombre}, bienvenido a readline`)

    rl.close();
})