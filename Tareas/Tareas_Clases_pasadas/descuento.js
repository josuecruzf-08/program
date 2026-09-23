import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto:", function(producto){
    rl.question("Ingrese el precio del producto:", function(precio){
        rl.question("Ingrese el porcentaje de descuento:", function(descuento){

            let precioProducto = parseFloat(precio);
            let porcentajeDescuento = parseFloat(descuento);

            let precioConDescuento = precioProducto - (precioProducto * (porcentajeDescuento / 100));
            let valorDescuento = precioProducto * (porcentajeDescuento / 100);
            console.log(`nombre del producto ${producto}`);
            console.log(`precio del producto ${precioProducto}`);
            console.log(`valor del descuento ${valorDescuento}`);
            console.log(`precio con descuento ${precioConDescuento}`);
            rl.close();
        });
    });
});

