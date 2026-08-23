import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) => {
    rl.question("Ingrese su apellido: ", (apellido) => {
        rl.question("Ingrese su año de ingreso: ", (anio) => {
            rl.question("Ingrese su cuota mensual: ", (cuota) => {

                let NombreMayuscula = nombre.toUpperCase();
                let ApellidoMayuscula = apellido.toUpperCase();

                let Primeras3 = apellido.slice(0, 3);

                let AnioTexto = anio.toString();
                let Ultimos2 = AnioTexto.slice(-2);

                let CuotaDecimal = parseFloat(cuota).toFixed(2);

                console.log("Nombre y apellido:", NombreMayuscula, ApellidoMayuscula);
                console.log("Primeras tres letras del apellido:", Primeras3);
                console.log("Últimos dos dígitos del año:", Ultimos2);
                console.log("Cuota mensual:", CuotaDecimal);

                rl.close();
            });
        });
    });
});