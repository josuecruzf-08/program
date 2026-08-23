import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un dato cualquiera: ", function(dato) {

    let resultadoParseFloat = parseFloat(dato);
    let resultadoIsNaN = isNaN(resultadoParseFloat);

    console.log(`Dato ingresado: ${dato}`);
    console.log(`Resultado de parseFloat(): ${resultadoParseFloat}`);
    console.log(`Valor retornado por isNaN(): ${resultadoIsNaN}`);

    rl.close();
});