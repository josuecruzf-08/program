import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarCalificaciones = (actual, cantidad, suma) => {
    if (actual > cantidad) {
        const promedio = suma / cantidad;
        console.log(`\nPromedio final: ${promedio.toFixed(2)}`);
        console.log(promedio >= 6.0 ? "Estado: Aprobado" : "Estado: Reprobado");
        rl.close();
        return;
    }

    rl.question(`Ingrese la calificacion ${actual} (0 a 10): `, (dato) => {
        const calificacion = parseFloat(dato);

        if (!Number.isFinite(calificacion) || calificacion < 0 || calificacion > 10) {
            console.log("Calificacion invalida");
            registrarCalificaciones(actual, cantidad, suma);
            return;
        }

        registrarCalificaciones(actual + 1, cantidad, suma + calificacion);
    });
};

rl.question("¿Cuantas evaluaciones desea registrar?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarCalificaciones(1, cantidad, 0);
    } else {
        console.log("Ingrese una cantidad valida");
        rl.close();
    }
});