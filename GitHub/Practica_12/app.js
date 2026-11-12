const readline = require('readline');
const { cargarDatos } = require('./database/database');

const insertarJuego = require('./operaciones/insertar');
const mostrarInventario = require('./operaciones/mostrar');
const actualizarJuego = require('./operaciones/actualizar');
const eliminarJuego = require('./operaciones/eliminar');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inventario = cargarDatos();

function menuPrincipal() {
    console.log("\n--- GAMING STORE: GESTIÓN DE INVENTARIO ---");
    console.log("1. Registrar nuevo videojuego");
    console.log("2. Mostrar catálogo de videojuegos");
    console.log("3. Actualizar precio o stock");
    console.log("4. Eliminar videojuego del catálogo");
    console.log("5. Salir");
    
    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                insertarJuego(rl, inventario, menuPrincipal);
                break;
            case '2':
                mostrarInventario(inventario, menuPrincipal);
                break;
            case '3':
                actualizarJuego(rl, inventario, menuPrincipal);
                break;
            case '4':
                eliminarJuego(rl, inventario, menuPrincipal);
                break;
            case '5':
                console.log("\nSaliendo del sistema... Cambios guardados en 'inventario.json'.");
                rl.close();
                break;
            default:
                console.log("\n Opción no válida. Intente de nuevo.");
                menuPrincipal();
                break;
        }
    });
}

console.log("¡Bienvenido al sistema de control de stock para tu tienda de videojuegos!");
menuPrincipal();