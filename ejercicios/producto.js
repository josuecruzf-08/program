import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", function(nombre) {
    rl.question("Ingrese el precio unitario: ", function(precio) {
        rl.question("Ingrese la cantidad comprada: ", function(cantidad) {

            const precioUnitario = Number(precio);
            const cantidadComprada = Number(cantidad);

            const total = precioUnitario * cantidadComprada;

            console.log(`Producto: ${nombre}`);
            console.log(`Precio unitario: $${precioUnitario}`);
            console.log(`Cantidad: ${cantidadComprada}`);
            console.log(`Total a pagar: $${total}`);

            rl.close();
        });
    });
});