import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la longitud en metros:", function(metros){

    let longitudMetros = parseFloat(metros);
    let longitudCentimetros = longitudMetros * 100;
    console.log(`Longitud en metros: ${longitudMetros}`);
    console.log(`Longitud en centímetros: ${longitudCentimetros}`);
    rl.close();
});