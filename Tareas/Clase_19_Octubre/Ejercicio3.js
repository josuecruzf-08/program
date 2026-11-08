import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarConsumo = (actual, cantidad, consumoTotal, equiposElevados) => {
    if (actual > cantidad) {
        console.log(`\nConsumo total registrado: ${consumoTotal.toFixed(2)} kWh`);
        console.log(`Equipos con consumo elevado (> 15 kWh): ${equiposElevados}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese el consumo en kWh del equipo ${actual}: `, (dato) => {
        const consumo = parseFloat(dato);

        if (!Number.isFinite(consumo) || consumo < 0) {
            console.log("Ingrese un consumo valido");
            registrarConsumo(actual, cantidad, consumoTotal, equiposElevados);
            return;
        }

        if (consumo > 15) {
            console.log("Este equipo presenta un consumo elevado");
        }

        registrarConsumo(
            actual + 1,
            cantidad,
            consumoTotal + consumo,
            consumo > 15 ? equiposElevados + 1 : equiposElevados
        );
    });
};

rl.question("¿Cuantos equipos desea registrar?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarConsumo(1, cantidad, 0, 0);
    } else {
        console.log("Ingrese una cantidad valida");
        rl.close();
    }
});