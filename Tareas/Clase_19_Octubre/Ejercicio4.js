import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarVehiculos = (actual, cantidad, ingresosTotales) => {
    if (actual > cantidad) {
        console.log(`\nIngresos totales: $${ingresosTotales.toFixed(2)}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese las horas del vehiculo ${actual}: `, (dato) => {
        const horas = parseFloat(dato);

        if (!Number.isFinite(horas) || horas < 0) {
            console.log("Ingrese horas validas");
            registrarVehiculos(actual, cantidad, ingresosTotales);
            return;
        }

        let costo = horas * 1.50;
        if (horas > 5) {
            costo *= 0.90;
        }

        console.log(`Importe: $${costo.toFixed(2)}`);

        registrarVehiculos(actual + 1, cantidad, ingresosTotales + costo);
    });
};

rl.question("¿Cuantos vehiculos se registraran?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarVehiculos(1, cantidad, 0);
    } else {
        console.log("Ingrese una cantidad valida");
        rl.close();
    }
});