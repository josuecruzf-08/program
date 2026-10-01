import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("¿Cuántas calificaciones ingresará?: ", (cantidad) => {
    const total = Number(cantidad);
    
    let suma = 0;
    let notaAlta = 0;
    let notaBaja = 10;
    let i = 1;

    function pedirNota() {
        if (i <= total) {
            rl.question(`Ingrese la nota ${i}: `, (entrada) => {
                const nota = Number(entrada);

                suma += nota;

                if (i === 1 || nota > notaAlta) notaAlta = nota;
                if (i === 1 || nota < notaBaja) notaBaja = nota;

                i++;
                pedirNota();
            });
        } else {
            console.log("\n--- RESULTADOS ---");
            console.log(`Promedio: ${(suma / total).toFixed(1)}`);
            console.log(`Nota más alta: ${notaAlta}`);
            console.log(`Nota más baja: ${notaBaja}`);

            rl.close();
        }
    }

    pedirNota();
});