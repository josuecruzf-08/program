import readline from "node:readline"

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese El total de su compra: ", (compra) =>{

    compra = parseFloat(compra)

    if (compra > 50 ){
        console.log(`su compra de $${compra} aplica a envio gratis`)
    }else {
        console.log(`tiene que pagar envio`)
    }

    rl.close()

});