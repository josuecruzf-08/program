import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Ingrese la cantidad de voletos que desea comprar: `, (cantidad) => {

    const cant = Number(cantidad);

    for (let i=1; i<=cant; i++) {

        let precio = 4.00;
        let precio2 = precio - 1.00;

        if ( i <= 4) {
            console.log(`${i}. El precio del boleto ${i} es de $${precio.toFixed(2)}`);
        }else{
            console.log(`${i}. El precio del boleto ${i} es de $${precio2.toFixed(2)}`);
        };
    };

    let total = (4 * 4.00) + ((cant - 4) * 3.00);

    console.log(`El total a pagar es de $${total.toFixed(2)}`);

    rl.close();
});