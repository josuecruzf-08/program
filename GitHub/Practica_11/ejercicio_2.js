const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const crearMultiplicador = (factor) => {
    return (numero) => numero * factor;
};

rl.question('Ingrese el número base: ', (numBase) => {
    rl.question('Ingrese el factor multiplicador: ', (fac) => {
        const numero = Number(numBase);
        const factor = Number(fac);

        const multiplicador = crearMultiplicador(factor);
        const resultado = multiplicador(numero);

        console.log(`Resultado de multiplicar ${numero} por ${factor}: ${resultado}`);
        rl.close();
    });
});