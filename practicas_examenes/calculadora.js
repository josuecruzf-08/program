import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero: ", function(numero1) {
    rl.question("Ingrese el segundo numero: ", function(numero2) {
        rl.question("Que operacion desea realizar: \n1. Suma \n2. Resta \n3. multiplicacion \n4. divicion \n", function(opc) {

            const num1 = parseFloat(numero1);
            const num2 = parseFloat(numero2);

            let resultado;

            if (opc === "1") {
                resultado = num1 + num2;
            } else if (opc === "2") {
                resultado = num1 - num2;
            } else if (opc === "3") {
                resultado = num1 / num2;
            } else if (opc === "4") {
                resultado = num1 * num2;
            }

            console.log(`El resultado es ${resultado}`);

            rl.close();
        });
    });
});