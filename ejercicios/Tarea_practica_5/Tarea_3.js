import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let saldo = 1000;

console.log("\n--- CAJERO AUTOMÁTICO ---");
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");

rl.question("Seleccione una opción: ", (opcionInput) => {
    const opcion = Number(opcionInput);

    switch (opcion) {
        case 1:
            console.log(`Su saldo actual es de $${saldo}`);
            rl.close();
            break;

        case 2:
            rl.question("Ingrese el monto a retirar: ", (montoInput) => {
                const montoRetiro = Number(montoInput);

                if (montoRetiro <= 0) {
                    console.log("El monto debe ser mayor a 0");
                } else if (montoRetiro % 5 !== 0) {
                    console.log("El monto debe ser múltiplo de $5");
                } else if (montoRetiro > saldo) {
                    console.log("Saldo insuficiente para el retiro");
                } else {
                    saldo = saldo - montoRetiro;
                    console.log(`Retiro exitoso. Su nuevo saldo es de $${saldo}`);
                }
                rl.close();
            });
            break;

        case 3:
            rl.question("Ingrese el monto a depositar: ", (montoInput) => {
                const montoDeposito = Number(montoInput);

                if (montoDeposito <= 0) {
                    console.log("El monto debe ser mayor a 0");
                } else if (montoDeposito > 5000) {
                    console.log("El monto no puede exceder $5000 en un solo depósito");
                } else {
                    saldo = saldo + montoDeposito;
                    console.log(`Depósito exitoso. Su nuevo saldo es de $${saldo}`);
                }
                rl.close();
            });
            break;

        case 4:
            console.log("Gracias por usar el cajero");
            rl.close();
            break;

        default:
            console.log("Opción no válida");
            rl.close();
            break;
    }
});