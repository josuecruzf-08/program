import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del empleado: ", function(nombre){
    rl.question("Ingrese el numero de horas trabajadas en la semana : ", function(horas){
        rl.question("Ingrese el pago resibido por hora: ", function(pago){

            let horasTrabajadas = parseFloat(horas);
            let pagoPorHora = parseFloat(pago);

            let pagoSemanal = horasTrabajadas * pagoPorHora;

            console.log(`nombre del empleado ${nombre}`);
            console.log(`pago semanal ${pagoSemanal}`);

            rl.close();

        });
    });
}); 

