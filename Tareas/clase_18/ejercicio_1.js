import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

console.log(`======== Menu de convercion ========`);
console.log(`\n1. Metros a centimetros`);
console.log(`2. Kilometros a metros`);
console.log(`3. Horas a minutos`);
console.log(`4. Dias a horas`);

rl.question(`Ingrese la opcion que desea realizar: `, (opcion) => {

    rl.question(`Ingrese la cantidad a convertir: `, (cantidad) =>{

        cantidad = parseFloat(cantidad);

        switch(opcion){
            case "1":
                const centimetros = cantidad * 100;
                console.log(`${cantidad} metros son ${centimetros} centimetros`);
                break;
            case "2":
                const metros = cantidad * 1000;
                console.log(`${cantidad} kilometros son ${metros} metros`);
                break;
            case "3":
                const minutos = cantidad * 60;
                console.log(`${cantidad} horas son ${minutos} minutos`);
                break;
            case "4":
                const horas = cantidad * 24;
                console.log(`${cantidad} dias son ${horas} horas`);
                break;
            default:
                console.log("Opcion no valida");
        }
        rl.close();
    });
})