import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un codigo de 8 digitos: ", (codigo) => {
    
    let CodigoTexto = codigo.toString();

    let Primeros4 = CodigoTexto.slice(0, 4);

    console.log(Primeros4);

    rl.close()
})