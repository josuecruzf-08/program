const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Monitor", precio: 250 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Auriculares", precio: 120 }
];

console.log("Listado completo de productos:");
productos.forEach((producto) => {
    console.log(` - Producto: ${producto.nombre} | Precio: $${producto.precio}`);
});

rl.question('\nIngrese el precio mínimo para filtrar (ej: 100): ', (precioMin) => {
    const minimo = Number(precioMin);
    const productosFiltrados = productos.filter((producto) => producto.precio > minimo);

    console.log(`Productos con precio superior a $${minimo}:`);
    console.log(productosFiltrados);
    rl.close();
});