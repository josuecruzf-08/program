import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su codigo de estudiante: ", (codigo) => {
    
    let Codigo3letras = codigo.slice(0, 3);

    console.log(Codigo3letras);

    rl.close()
})