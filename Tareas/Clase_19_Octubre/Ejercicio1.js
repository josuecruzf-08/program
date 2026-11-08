import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const registrarVentas = (actual, cantidad, total) => {
    if (actual > cantidad) {
        console.log(`\nCantidad de ventas: ${cantidad}`);
        console.log(`Total de ingresos: $${total.toFixed(2)}`);
        rl.close();
        return;
    }

    rl.question(`Ingrese el monto de la venta ${actual}: $`, (dato) => {
        const venta = parseFloat(dato);

        if (!Number.isFinite(venta) || venta < 0) {
            console.log("Ingrese un monto valido");
            registrarVentas(actual, cantidad, total);
            return;
        }

        const nuevoTotal = total + venta;
        console.log(`Total acumulado $${nuevoTotal.toFixed(2)}`);

        registrarVentas(actual + 1, cantidad, nuevoTotal);
    });
};

rl.question("¿Cuantas ventas de sea registrar?: ", (dato) => {
    const cantidad = parseInt(dato);

    if (Number.isInteger(cantidad) && cantidad > 0) {
        registrarVentas(1, cantidad, 0);
    } else {
        console.log("Ingrese una cantidad valida");
        rl.close();
    }
});