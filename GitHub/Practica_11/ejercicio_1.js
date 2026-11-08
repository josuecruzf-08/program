const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese las notas separadas por comas (ej: 8,7,9,6,10): ', (respuesta) => {
    const notas = respuesta.split(',').map(Number);
    const sumaTotal = notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0);
    const promedio = sumaTotal / notas.length;

    console.log(`Las notas registradas son: [${notas.join(', ')}]`);
    console.log(`El promedio final del estudiante es: ${promedio.toFixed(2)}`);
    rl.close();
});