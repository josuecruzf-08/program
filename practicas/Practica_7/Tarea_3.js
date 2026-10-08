const inventario = [
    { nombre: "Laptop", precio: 800, cantidad: 5 },
    { nombre: "Mouse", precio: 25, cantidad: 20 },
    { nombre: "Teclado", precio: 45, cantidad: 15 },
    { nombre: "Monitor", precio: 200, cantidad: 8 }
];

let totalUnidadesProductos = 0;
let valorTotalInventario = 0;

console.log("Detalle por producto:");
for (const producto of inventario) {
    const valorTotalProducto = producto.precio * producto.cantidad;
    console.log(`- ${producto.nombre}: ${producto.cantidad} unidades x $${producto.precio} c/u = Valor Total: $${valorTotalProducto}`);

    totalUnidadesProductos += producto.cantidad;
    valorTotalInventario += valorTotalProducto;
}

const resumenInventario = {
    totalTiposDeProductos: inventario.length,
    unidadesTotalesEnStock: totalUnidadesProductos,
    valorTotalMonetario: `$${valorTotalInventario}`
};

console.log("\n--- Resumen General del Inventario ---");
for (const propiedad in resumenInventario) {
    console.log(`> ${propiedad}: ${resumenInventario[propiedad]}`);
}