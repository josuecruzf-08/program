function insertarJuego(rl, inventario, callbackMenu) {
    rl.question("\nIngrese el nombre del videojuego: ", (nombre) => {
        rl.question("Ingrese el precio ($): ", (precio) => {
            rl.question("Ingrese el stock disponible: ", (stock) => {
                const nuevoJuego = {
                    id: inventario.length + 1,
                    nombre,
                    precio: parseFloat(precio),
                    stock: parseInt(stock)
                };
                inventario.push(nuevoJuego);
                // Aquí puedes llamar a tu función de guardar datos si lo deseas
                console.log("\n¡Videojuego registrado con éxito!");
                callbackMenu();
            });
        });
    });
}
module.exports = insertarJuego;