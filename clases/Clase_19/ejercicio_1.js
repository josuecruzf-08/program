import readline from "node:readline"

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question(`Ingrese cuanto ahorra por dia : `, (ahorro) => {
    const ahorroDiario = Number(ahorro);

    let ahorroTotal = 0;
    for (let i=1; i<=5; i++){
        ahorroTotal = ahorroTotal + ahorroDiario;
        const total = ahorroDiario * i;
        console.log(`El total ahorrado en el dia ${i} es de ${total}`);
    }
    rl.close();

});