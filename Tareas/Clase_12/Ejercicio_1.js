import readline from "node:readline"

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", (nombre) =>{
    rl.question("Ingrese su edad: ", (edad) => {


        edad = parseInt(edad);

        if (edad >= 18){
            console.log(`Hola ${nombre}, usted es mayor de edad`)
        }else {
            console.log(`Hola ${nombre}, usted es menor de edad`)
        }

        rl.close()
    });
});