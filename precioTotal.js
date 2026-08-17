import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", function(nombre){
    rl.question("Ingrese el precio del producto: ", function(precio){
        rl.question("Ingrese la cantidad de productos a comprar: ", function(cantidad){

            let precioProducto = parseFloat(precio);
            let cantidadProductos = parseInt(cantidad);
            let Total = precioProducto * cantidadProductos;

            console.log(`\n------Tienda------`);
            console.log(`nombre del producto: ${nombre}`);
            console.log(`precio del producto: ${precioProducto}`);
            console.log(`cantidad de productos: ${cantidadProductos}`);
            console.log(`Total a pagar: ${Total}`);

            rl.close()

        });
    });
});