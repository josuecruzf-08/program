import { eventLoopUtilization } from "node:perf_hooks";
import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

rl.question("Ingrese el nombre del evento: ", (evento)=>{
    let eventoMayuscula = evento.toUpperCase();

    console.log(` Entrada del nombre ${evento} \n Entrada en mayuscula ${eventoMayuscula}`)

    rl.close()
});
