import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la cantidad de dinero en dolares:", function(dolares){
    rl.question("Ingrese el tipo de cambio del dolar al euro:", function(tipoCambio){

        let cantidadDolares = parseFloat(dolares);
        let tipoCambioDolarEuro = parseFloat(tipoCambio);

        let cantidadEuros = cantidadDolares * tipoCambioDolarEuro;

        console.log(`Cantidad en dolares: ${cantidadDolares}`);
        console.log(`Tipo de cambio: ${tipoCambioDolarEuro}`);
        console.log(`Cantidad en euros: ${cantidadEuros}`);

        rl.close();
    });
});