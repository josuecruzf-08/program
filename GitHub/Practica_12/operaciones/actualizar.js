function actualizarJuego(rl, inventario, callbackMenu) {
    console.log("\n--- ACTUALIZAR VIDEOJUEGO ---");
    rl.question("Ingrese el ID del juego a actualizar: ", (idBuscado) => {
        const juego = inventario.find(j => j.id == idBuscado);
        if (!juego) {
            console.log("Videojuego no encontrado.");
            return callbackMenu();
        }
        rl.question(`Nuevo precio para ${juego.nombre} (actual: ${juego.precio}): `, (nuevoPrecio) => {
            if (nuevoPrecio) juego.precio = parseFloat(nuevoPrecio);
            console.log("¡Actualizado correctamente!");
            callbackMenu();
        });
    });
}
module.exports = actualizarJuego;