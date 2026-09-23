import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ", (tipo) => {
    const tipoTarjeta = Number(tipo);

    rl.question("Ingrese el monto a retirar: ", (monto) => {
        const montoRetirar = Number(monto);
        let limite = 0;
        let tarjetaValida = true;

        switch (tipoTarjeta) {
            case 1:
                limite = 500;
                break;
            case 2:
                limite = 1000;
                break;
            case 3:
                limite = 2000;
                break;
            default:
                tarjetaValida = false;
                break;
        }

        if (!tarjetaValida) {
            console.log("Tarjeta no válida");
        } else if (montoRetirar > limite) {
            console.log("Límite excedido");
        } else if (montoRetirar % 10 !== 0 || montoRetirar <= 0) {
            console.log("El monto debe ser múltiplo de 10");
        } else {
            console.log("Retiro exitoso");
        }

        rl.close();
    });
});