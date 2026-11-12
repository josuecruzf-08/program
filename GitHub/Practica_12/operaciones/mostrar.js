function mostrarInventario(inventario, callbackMenu) {
    console.log("\n--- CATÁLOGO DE VIDEOJUEGOS ---");
    if (inventario.length === 0) {
        console.log("No hay videojuegos registrados.");
    } else {
        console.table(inventario);
    }
    callbackMenu();
}
module.exports = mostrarInventario;