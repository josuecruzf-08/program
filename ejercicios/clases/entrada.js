// //1- IMPORTAR MODULO
import readline from "node:readline"

//2- CREAMOS LA INTERFAZ
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//3- HACEMOS LA PREGUNTA AL USUARIO
rl.question(`¿Como te llamás? `, function(name){
    rl.question(`¿cuantos años tenés? `, function(age){
        console.log(`hello my name is ${name} I am ${age} years old`)
        rl.close()
    });
});