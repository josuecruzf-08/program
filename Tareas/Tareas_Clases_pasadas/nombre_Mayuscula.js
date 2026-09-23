import { eventLoopUtilization } from "node:perf_hooks";
import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Ingrese su nombre: ", (nombre)=>{
    let nombreMayuscula = nombre.toUpperCase();

    
    console.log(`\n Entrada del nombre ${nombre} \n Entrada en mayuscula ${nombreMayuscula}`)
    rl.close()
});