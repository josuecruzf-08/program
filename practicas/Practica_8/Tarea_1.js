import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerLetra(calificacion) {
    if (calificacion >= 90) return "A";
    if (calificacion >= 80) return "B";
    if (calificacion >= 70) return "C";
    if (calificacion >= 60) return "D";
    return "F";
}

function calcularPromedio(calificaciones) {
    let suma = 0;
    for (const nota of calificaciones) {
        suma += nota;
    }
    return suma / calificaciones.length;
}

rl.question("¿Cuántas calificaciones ingresará?: ", (cantidad) => {
    const total = Number(cantidad);
    const calificaciones = [];
    let i = 1;

    function pedirCalificacion() {
        if (i <= total) {
            rl.question(`Ingrese la calificación ${i} (0-100): `, (cal) => {
                const nota = Number(cal);

                if ( nota < 0 || nota > 100) {
                    console.log("Calificación inválida. Debe ser entre 0 y 100.");
                    pedirCalificacion();
                    return;
                }

                calificaciones.push(nota);
                i++;
                pedirCalificacion();
            });
        } else {
            console.log("\n--- RESULTADOS ---");
            for (let j = 0; j < calificaciones.length; j++) {
                const nota = calificaciones[j];
                console.log(`Calificación ${j + 1}: ${nota} (${obtenerLetra(nota)})`);
            }

            const promedio = calcularPromedio(calificaciones);
            console.log(`Promedio: ${promedio.toFixed(2)} (${obtenerLetra(promedio)})`);
            rl.close();
        }
    }

    pedirCalificacion();
});