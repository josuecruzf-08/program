function eliminarJuego(rl, inventario, callbackMenu) {
    console.log("\n--- ELIMINAR VIDEOJUEGO ---");
    rl.question("Ingrese el ID del juego a eliminar: ", (idBuscado) => {
        const index = inventario.findIndex(j => j.id == idBuscado);
        if (index === -1) {
            console.log("Videojuego no encontrado.");
        } else {
            inventario.splice(index, 1);
            console.log("¡Videojuego eliminado del catálogo!");
        }
        callbackMenu();
    });
}
module.exports = eliminarJuego;