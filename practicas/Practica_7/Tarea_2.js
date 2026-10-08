import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

function mostrarMenu() {
    console.log("\n--- MENÚ PRINCIPAL ---");
    console.log("1. Consultar saldo");
    console.log("2. Retirar dinero");
    console.log("3. Depositar dinero");
    console.log("4. Salir");

    rl.question("Seleccione una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                console.log(`Su saldo actual es: $${saldo}`);
                mostrarMenu();
                break;

            case '2':
                rl.question("Ingrese la cantidad a retirar: $", (retiroStr) => {
                    const retiro = Number(retiroStr);
                    if (isNaN(retiro) || retiro <= 0) {
                        console.log("Cantidad inválida.");
                    } else if (retiro > saldo) {
                        console.log("Fondos insuficientes.");
                    } else {
                        saldo -= retiro;
                        console.log(`Retiro exitoso. Nuevo saldo: $${saldo}`);
                    }
                    mostrarMenu();
                });
                break;

            case '3':
                rl.question("Ingrese la cantidad a depositar: $", (depositoStr) => {
                    const deposito = Number(depositoStr);
                    if (isNaN(deposito) || deposito <= 0) {
                        console.log("Cantidad inválida.");
                    } else {
                        saldo += deposito;
                        console.log(`Depósito exitoso. Nuevo saldo: $${saldo}`);
                    }
                    mostrarMenu();
                });
                break;

            case '4':
                console.log("Saliendo del cajero...");
                rl.close();
                break;

            default:
                console.log("Opción no válida.");
                mostrarMenu();
        }
    });
}

mostrarMenu();